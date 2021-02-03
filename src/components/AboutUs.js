import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from './Title'

const query = graphql `
{
    about:contentfulAboutUs {
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
    const {about:{title, content:{childMdx:{body}}}} = useStaticQuery(query);
    return (
        <Wrapper>
        <div className="section section-center">
        <Title title={title} />
        <div className="mdx">
        <MDXRenderer>{body}</MDXRenderer>
        </div>
        </div>    
        </Wrapper>
    )
}

export default AboutUs

const Wrapper = styled.section`
background: var(--clr-primary-blue);
color: var(--clr-white);
margin-bottom: -3.4rem;

h2, p {
    color: var(--clr-white);
}

.mdx {
padding-bottom: 3rem;
    h3 {
        margin-bottom: 2rem;
    }
}

`