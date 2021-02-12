import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const MyH2 = props => {
  return (
    <h2
      style={{
        color: "#2b4d97",
        marginBottom: "1.25rem",
      }}
    >
      {props.children}
    </h2>
  )
}

const MyH3 = props => {
  return (
    <h3
      style={{
        color: "#2b4d97",
        marginBottom: "1.25rem",
      }}
    >
      {props.children}
    </h3>
  )
}

const MyA = props => {
  return (
    <ALink>
    <Link to={props.href}>
      {props.children}
    </Link>
    </ALink>
  )
}

const ALink = styled.span`
    a {
    color: var(--clr-red);
    &:hover {
      color: var(--clr-green);
    }
  }
`

export { MyH2, MyH3, MyA }
