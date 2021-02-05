import React from "react"
import { Link } from "gatsby"
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "sales equipment",
    url: "/sales-equipment/",
  },
  {
    id: 3,
    text: "services",
    url: "/services/",
    icon: true,
    dropdown: [
      {
        id: 3.1,
        text: "air conditioning",
        url: "/air-conditioning/",
      },
      {
        id: 3.2,
        text: "refrigeration",
        url: "/refrigeration/",
      },
      {
        id: 3.3,
        text: "coldroom",
        url: "/coldroom/",
      },
    ]
  },
  {
    id: 4,
    text: "enquiries",
    url: "/enquiries/",
  },
  {
    id: 5,
    text: "contact us",
    url: "/contact-us/",
  },
]
// 
const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
    {!link.icon ? <Link to={link.url}>{link.text}</Link> :
    <div className="dropdown-link"><span>{link.text}{<RiArrowDropDownLine />}</span>
      <div className="dropdown">
      {link.dropdown.map(drop => {
        return (
            <Link key={drop.id} to={drop.url}>{drop.text}</Link>
        )
      })}
      </div></div>
      }
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