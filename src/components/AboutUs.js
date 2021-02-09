import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "./Title"
import about from "../images/about.jpg"

const query = graphql`
  {
    about: contentfulAboutUs {
      title
      content {
        childMdx {
          body
        }
      }
    }
  }
`

const AboutUs = () => {
  const {
    about: {
      title,
      content: {
        childMdx: { body },
      },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <section className="section section-center">
        <Title title={title} />
        <div className="about-grid">
        <img src={about} className="about-img" alt="about"/>
        <div className="mdx">
          <MDXRenderer>{body}</MDXRenderer>
          </div>
          </div>
        
      </section>
    </Wrapper>
  )
}

export default AboutUs

const Wrapper = styled.section`
  background: var(--clr-primary-blue);
  color: var(--clr-white);
  margin-bottom: -3.4rem;
  
  h2,
  p {
    color: var(--clr-white);
  }

  .mdx {
    padding-bottom: 3rem;
    h3 {
      margin-bottom: 2rem;
      color: var(--clr-white) !important;
    }
  }

  .about-grid {
    display: grid;
    row-gap: 3rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  .about-img {
    max-width: 400px;
    width: 100%;
    margin: auto;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 960px) {
    .about-grid {
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    text-align: left;
    
  }

  .about-img {
    margin: 0;
  }
  }
`
