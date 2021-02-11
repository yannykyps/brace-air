import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "./Title"

const query = graphql`
  {
    about: contentfulAboutUs {
      title
      image {
        fluid(quality: 64, maxWidth: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
      image: { fluid },
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
          <div className="about-img">
            <Image fluid={fluid} alt="about" />
          </div>
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
    margin: auto;
    max-width: 400px;
    width: 100%;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 960px) {
    .about-grid {
      grid-template-columns: 400px 1fr;
      column-gap: 2rem;
      text-align: left;
    }

    .about-img {
      margin: 0;
    }
  }
`
