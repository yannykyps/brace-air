import React from 'react'
import styled from "styled-components"
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone"


const Quote = () => {
    return (
        <Wrapper>
        <div className="quote">
        <div className="section section-center quote-grid">
        <div>
        <h3>Request a Free quote</h3>
        <p>BraceAir is your one-stop, quality solution for all your refrigeration installation, servicing & repair requirements.</p>
        <button>Request a free quote</button>
        </div>
        <div>
           <h3>got a question?</h3> 
           <h3>give us a call</h3>
           <div className="margin">
           <a href="tel:02036750487" className="tel"><HiOutlinePhone className="phone" /> 020 3675 0487</a> 
           </div>
        </div>
        </div>
        </div>
           
        </Wrapper>
    )
}

export default Quote

const Wrapper = styled.section`
color: var(--clr-white);

.quote-grid {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* column-gap: 4rem; */
    text-align: center;
    align-items: center;
    /* margin: auto; */
    row-gap: 3rem;
}
.quote {
    padding: 3rem 0rem;
    width:100%;
    display: block;
    position: relative;
    background: rgba(43.0, 77.0, 151.0, 0.6);
}

.quote::after {
    content: "";
    background-image: url("./quote-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
}

.margin {
    margin-top: 2rem;
}
.tel {
    background: #e2000b;
    /* display: inline-block; */
    color: var(--clr-white);
    border-radius: var(--radius);
    padding: 1rem 1.5rem;
    transition: var(--transition);
    &:hover {
        background: var(--clr-primary-blue);
    }
}

.phone {
    font-size: 30px;
    /* padding-top: 0.5rem; */
    margin-right: 0.5rem;
    margin-bottom: -9px;
    display: inline-block;
}
    
button {
  text-transform: capitalize;
  background: #e2000b;
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-size: clamp(0.875rem,0.875rem + 1vw,1rem);
  color: var(--clr-white);
  font-family: var(--ff-secondary);
  cursor: pointer;
  transition: var(--transition);
        &:hover {
            background: var(--clr-primary-blue);
        }
}


p {
    color: var(--clr-white);
}

@media screen and (min-width: 800px) {
    .quote-grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
}

}

`