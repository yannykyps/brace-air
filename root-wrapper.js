import React from "react"
import {createGlobalStyle} from "styled-components"
import {MDXProvider} from "@mdx-js/react"
import {GatsbyProvider} from "./src/context/context"


const GlobalStyle = createGlobalStyle`

:root {
  --clr-primary-blue: #2b4d97;
  --clr-primary-green: #26d672;
  --clr-primary-purple: #7226d6;
  --clr-primary-yellow: #d6ca26;
  --clr-primary-lime: #8ad626;
  --clr-primary-grey: #222;

  --clr-white: #fff;
  --clr-black: #0a0c10;
  --clr-green: #00926d;
  --clr-red: #e2000b;

  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);

  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;

  --spacing: 0.1rem;
  --radius: 0.25rem;
  --transition: all 0.3s linear;
  --hoverTransition: 150ms cubic-bezier(0.215,0.61,0.355,1);

  --max-width: 1170px;
  --fixed-width: 700px;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --button-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  --white-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
} 

body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: min(max(0.875rem, 0.875rem + 1vw), 1rem);
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

input {
    font-size: 100%;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}

h1 {
  font-size: min(max(1.5rem, 1.0556rem + 1.9753vw), 2.5rem); 
}

h2 {
  font-size: min(max(1.25rem, 0.9167rem + 1.4815vw), 2rem); 
}

h3 {
  font-size: min(max(1rem, 0.7778rem + 0.9877vw), 1.5rem);
}

h4 {
  font-size: min(max(0.875rem, 0.8194rem + 0.2469vw), 1rem);
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
  font-size: min(max(0.875rem, 0.8194rem + 0.2469vw), 1rem);
}

span {
  font-size: min(max(0.875rem, 0.8194rem + 0.2469vw), 1rem);
}

a {
  font-size: min(max(0.875rem, 0.8194rem + 0.2469vw), 1rem);
}

@media screen and (min-width: 800px) {

h1,
h2,
h3,
h4 {
  line-height: 1;
}
}

/* section */
.section-center {
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 3.25rem;
}

.section {
  padding: 3rem 0 0 0;
}


.section-title {
  font-weight: 700;
  text-transform: uppercase;
  color: var(--clr-primary-blue);
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  font-weight: 700;
  text-transform: uppercase;
  color: var(--clr-grey-3);
}


.dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    display: grid;
    padding: 2rem;
    width: 200px;
    transition: opacity 250ms ease-in-out;
    -moz-transition: opacity 250ms ease-in-out;
   -webkit-transition: opacity 250ms ease-in-out;
    background: var(--clr-white);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    /* grid-template-rows: auto auto auto; */
    transform: translateX(-30%);
    row-gap: 0.5rem;

  }


  .dropdown-link {
    cursor: default;
    position: relative;
    
    &:hover {
      color: var(--clr-primary-purple);
    }
    svg {
      height:1em;
      width:1em;
    }
  }

.dropdown-link:hover .dropdown {
  visibility: visible;
  opacity: 1;
  
}

`

export const wrapPageElement = ({element}) => {
    return <>
        <GlobalStyle/>
        <MDXProvider>
        <GatsbyProvider>{element}</GatsbyProvider>
        </MDXProvider>
    </>
}