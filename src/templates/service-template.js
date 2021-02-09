import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout, SEO, Title } from "../components"

const ServiceTemplate = ({ data }) => {
  const {
    service: {
      title,
      subTitle,
      content: {
        childMdx: { body },
      },
    },
  } = data
  return (
    <Layout>
      <SEO title={title} description={subTitle} />
      <section className="section section-center">
        <Title titleH1={title} subTitle={subTitle} />
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ServiceQuery($slug: String) {
    service: contentfulServicePages(slug: { eq: $slug }) {
      id
      title
      subTitle
      slug
      content {
        childMdx {
          body
        }
      }
    }
  }
`
export default ServiceTemplate
