import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const query = graphql`
  {
    allContentfulSalesPage(sort: { fields: index, order: ASC }) {
      nodes {
        id
        title
        index
        content {
          childMdx {
            body
          }
        }
      }
    }
  }
`
const Sales = () => {
  const {
    allContentfulSalesPage: { nodes },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      {nodes.map(sales => {
        return (
          <article key={sales.id} className={`sales-${sales.title}`}>
            <MDXRenderer>{sales.content.childMdx.body}</MDXRenderer>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Sales

const Wrapper = styled.section`
  margin-bottom: 4rem;

  article {
    margin-bottom: 2rem;
  }
`
