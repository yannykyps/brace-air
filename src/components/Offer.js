import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Offer = () => {
  return (
    <Wrapper>
      <h4>Domestic & American Fridge Freezer Service</h4>
      <Link
        to="/enquiries/?text=domestic and american fridge freezer service&type=refrigeration&service=service"
        aria-label="get a quote"
      />
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;

  h4 {
    color: var(--clr-white);
    padding: 0.5rem;
    background: rgba(43, 77, 151, 0.7);
    border: 2px dotted var(--clr-red);
    border-radius: var(--radius);
    text-align: center;
  }
  a {
    background: var(--clr-red);
    height: auto;
    color: var(--clr-white);
    font-weight: 700;
    width: 127.09px;
    padding: 0.5rem;
    margin: auto;
    text-align: center;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    display: grid;
    justify-content: center;
    grid-template-rows: auto auto;
    &:hover {
      background: var(--clr-primary-blue);
    }
    &:after {
      content: "From £99.00";
      transition: var(--transition);
    }
    &:hover:after {
      content: "Get A Quote";
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 5%;
  }
`
