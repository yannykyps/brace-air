import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  {
    contentfulManufacturers {
      logo {
        title
        fixed(height: 40) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`
const Manufacturers = () => {
  const {
    contentfulManufacturers: { logo },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <h4>Manufacturers we work with</h4>
      <div className="img-grid">
        {logo.map((img, index) => (
          <Image key={index} fixed={img.fixed} alt={img.title} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Manufacturers

const Wrapper = styled.section`
  h4 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .img-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(123px, 1fr));
    justify-items: center;
    row-gap: 1rem;
  }
`
