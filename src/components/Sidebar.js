import React, { useContext } from "react"
import styled from "styled-components"
import { MdClose } from "@react-icons/all-files/md/MdClose"
import {GatsbyContext} from "../context/context"
import { Link } from "gatsby"

const Sidebar = () => {
  const {hideSidebar} = useContext(GatsbyContext);
   return <Wrapper>
    <div className="container">
      <button onClick={hideSidebar}>
        <MdClose className="icon" />
      </button>
      
      <div className="sidebar-links">
      <Link to="/">Home</Link>
      <Link to="/sales-equipment/">Sales Equipment</Link>
      <Link to="/air-conditioning/">Air Conditioning</Link>
      <Link to="/refrigeration/">Refrigeration</Link>
      <Link to="/coldroom/">Coldroom</Link>
      <Link to="/enquiries/">Enquiries</Link>
      <Link to="/contact-us/">Contact Us</Link>
      </div>

      <div className="address">
      <ul>
        <h4>Address</h4>
            <li>Woolacombe Road, Blackheath,</li>
            <li>London SE3 8QH</li>
        </ul>
        <ul>
        <h4>Contact Us</h4>
            <li>Telephone: <a href="tel:02036750487">020 3675 0487</a></li>
            <li>Email: <a href="mailto:info.brace@yahoo.co.uk">info.brace@yahoo.co.uk</a></li>
        </ul>
        <ul>
        <h4>Working Hours</h4>
            <li>Mon - Fri: 0830 – 1730</li>
            <li>Saturday: 0830 - 1600</li>
            <li>Sunday: Closed</li>
        </ul>
        </div>
    </div>  
  </Wrapper>
}
const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
 
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
  @media (min-width: 929px) {
    display: none;
  }
  .container {
    background: var(--clr-white);
    width: 93%;
    height: auto;
    border-radius: var(--radius);
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 14px;
    margin-right: 14px;
    padding: 2rem 1rem 2rem 1rem;
    
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-primary-pink);
      transition: var(--transition);
    }
    button:hover {
      color: var(--clr-primary-purple);
    }
    .sidebar-links {
      display: grid;
      gap: 8px 5px;
      margin: 1rem auto 1rem auto;
      text-align: center;
      padding-bottom: 1rem;
        a {
        grid-gap: 0.75rem;
        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        /* font-size: 20px; */
        letter-spacing: .2px;
        &:hover {
          color: var(--clr-primary-purple);
              }
      }  
    }

    .address {
      text-align: center;

      ul {
        margin-bottom: 1rem;
      }

      li, a {
        font-size: 13px;
      }



      h4 {
        margin-bottom: 0.2rem;
      }
    }
  }
`
export default Sidebar
