import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "./Title"

const query = graphql`
  {
    mission: contentfulQualityService {
      title
      content {
        childMdx {
          body
        }
      }
      image {
        fluid(quality: 64, maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
const QualityService = () => {
  const {
    mission: {
      title,
      content: {
        childMdx: { body },
      },
      image: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section section-center">
        <Title title={title} />
        <div className="img">
          <Image fluid={fluid} alt="5 star service" />
        </div>
        <MDXRenderer>{body}</MDXRenderer>
    </Wrapper>
  )
}

export default QualityService

const Wrapper = styled.section`
  text-align: center;

  .img {
    max-width: 400px;
    width: 100%;
    margin: auto;
    margin-top: -2rem;
  }
`
