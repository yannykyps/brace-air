import React from "react"
import { Layout, Enquiries, SEO, Title } from "../components"

const enquiriesPage = () => {
  return (
    <Layout>
      <SEO title="Enquiries" description="enquiries page" noIndex />
      <section className="section section-center">
        <Title
          title="enquiries"
          subTitle="Please complete and submit the form below and we will get back to you shortly."
        />
        <Enquiries />
      </section>
    </Layout>
  )
}

export default enquiriesPage
