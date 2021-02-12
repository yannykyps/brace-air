import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const query = graphql`
  {
    sales: allContentfulSalesEquipment {
      nodes {
        category
        make
        images {
          id
          fluid(quality: 64, maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
const SalesImages = ({ category }) => {
  const {
    sales: { nodes },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      {nodes
        .filter(img => img.category === category)
        .map(img =>
          img.images.map(img => (
            <div key={img.id} className="sales-image">
              <Image fluid={img.fluid} />
            </div>
          ))
        )}
    </Wrapper>
  )
}

export default SalesImages

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-items: center;
`
