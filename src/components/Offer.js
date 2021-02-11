import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Offer = () => {
  return (
    <Wrapper>
    
      <Link to="/enquiries/?text=domestic and american fridge freezer service&type=refrigeration&service=service">
      <span>Domestic & American Fridge Freezer Service</span>
        <span>From £99.00</span>
      </Link>
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  a {
    background: var(--clr-red);
    height: auto;
    color: var(--clr-white);
    font-weight: 700;
    /* letter-spacing: var(--spacing); */
    padding: 0.2rem 0.5rem;
    margin: auto;
    text-align: center;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    display: grid;
    justify-content: center;
    grid-template-rows: auto auto;
    transition: var(--transition);
    &:hover {
        background: var(--clr-primary-blue);
    }
  }
`
