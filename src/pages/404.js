import React from "react"
import { Layout, SEO, Title } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="Eroor 404 page" noIndex />
    <section className="section section-center">
      <Title title="Error 404" subTitle="This page does not exist" />
    </section>
  </Layout>
)

export default NotFoundPage
