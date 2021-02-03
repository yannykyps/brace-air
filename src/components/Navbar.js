import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import {GatsbyContext} from "../context/context"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import logo from "../images/logo.gif"
import Links from "../constants/links"

const Navbar = () => {
    const {isSidebarOpen, showSidebar } = useContext(GatsbyContext)
    return (
        <Wrapper>
        <nav className="nav-bar">
        <div className="nav-center">
        <div className="nav-header">
            <Link to="/"><img src={logo} alt="logo" width="40"/></Link>
            {!isSidebarOpen && <button className="toggle-btn" aria-label="toggle sidebar" onClick={showSidebar}>
                <HiMenu />
                </button>}
        </div>
        <Links styleClass="nav-links" />
        </div>
    </nav>
    </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`

img {
margin-bottom: 0;
}

.nav-bar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  z-index: 200;
  align-items: center;
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
  padding-top: 1rem;
}

.nav-center {
  width: 95vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100px auto;
  align-items: center;
  max-width: var(--max-width);
}

.nav-header {
  display: flex;
  align-items: center;
  margin: auto;
}

.nav-links {
  display: none;
  /* position: relative; */
  transition: var(--transition);
  li {
    margin-right: 2rem;
    text-transform: capitalize;
  }
  a {
    color: var(--clr-primary-blue);
    transition: var(--transition);
    &:hover {
        color: var(--clr-primary-purple);
    }  
  }
}


.toggle-btn {
  font-size: 2rem;
  position: absolute;
  right: 2.5%;
  top: 18px;
  background: transparent;
  border-color: transparent;
  color: var(--clr-black);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--clr-primary-blue);
  }
}


@media screen and (min-width: 929px) {

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0;
}

.toggle-btn {
    display: none;
  }
}
`