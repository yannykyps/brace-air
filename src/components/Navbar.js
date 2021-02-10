import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import logo from "../images/logo.svg"
import Links from "../constants/links"

const Navbar = () => {
  const { isSidebarOpen, showSidebar } = useContext(GatsbyContext)
  return (
    <Wrapper id="top">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" width="40" height="50" />
          </Link>
          {!isSidebarOpen && (
            <button
              className="toggle-btn"
              aria-label="toggle sidebar"
              onClick={showSidebar}
            >
              <HiMenu />
            </button>
          )}
        </div>
        <Links styleClass="nav-links" />
        <div className="fb-img"></div>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
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

  img {
    margin-bottom: 0;
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
    margin-left: 5px;
    margin-bottom: 7px;
  }

  .nav-links {
    display: none;
    transition: var(--transition);
    li {
      margin-right: 2rem;
      text-transform: capitalize;
    }
    a {
      color: var(--clr-primary-blue);
      transition: var(--transition);
      &:hover {
        color: var(--clr-green);
      }
    }
  }

  .toggle-btn {
    font-size: 2rem;
    position: absolute;
    right: 2.5%;
    top: 24px;
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
