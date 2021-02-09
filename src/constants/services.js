import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "air conditioning",
    url: "/air conditioning/",
  },
  {
    id: 2,
    text: "refrigeration",
    url: "/refrigeration/",
  },
  {
    id: 3,
    text: "coldroom",
    url: "/coldroom/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
