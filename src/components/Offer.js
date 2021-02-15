import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Offer = () => {
  return (
    <Wrapper>
      <p>Domestic & American Fridge Freezer<br/>
      Service <Link
        to="/enquiries/?text=domestic and american fridge freezer service&type=refrigeration&service=service"
        aria-label="get a quote"
      ></Link></p>
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  bottom: 10%;

  p {
    color: var(--clr-white);
    padding: 0.5rem;
    background: rgba(43, 77, 151, 1);
    border: 2px dotted var(--clr-red);
    border-radius: var(--radius);
    text-align: center;
    font-weight: 600;
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--clr-red);
    font-weight: 700;
    &:hover {
      color: var(--clr-green);
    }
    &:after {
      content: "From £99.00";
    }
    &:hover:after {
      content: "Get A Quote";
    }
    
  }

  @media screen and (min-width: 768px) {
    bottom: 5%;
  }
`
