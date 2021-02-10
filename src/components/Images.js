import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allContentfulImages {
      nodes {
        title
        id
        image {
          fluid(quality: 64, maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const Images = ({ title, styleClass }) => {
  const {
    allContentfulImages: { nodes },
  } = useStaticQuery(query)

  return (
    <div className={styleClass}>
      {nodes
        .filter(img => img.title === title)
        .map(img => (
          <Image key={img.id} fluid={img.image.fluid} alt={img.title} />
        ))}
    </div>
  )
}

export default Images

