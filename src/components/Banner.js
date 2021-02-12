import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Banner = () => {
  return (
    <Wrapper>
      <h4>
        Call us today on <a href="tel:02036750487">020 3675 0487</a> to book a
        free quote or complete our <Link to="/enquiries/">enquiry form</Link>
      </h4>
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  background: var(--clr-primary-blue);
  width: 100%;
  color: var(--clr-white);
  text-align: center;
  padding: 1rem 0;
  h4 {
    margin: 0;
  }
  a {
    color: var(--clr-red);
    &:hover {
      color: var(--clr-white);
    }
  }
`
