import React from "react"
import { useLocation } from "@reach/router"
import { Layout, Enquiries, SEO, Title } from "../components"

const EnquiriesPage = () => {
  const { search } = useLocation();
  const text = new URLSearchParams(search).get("text")
  const type = new URLSearchParams(search).get("type")
  const service = new URLSearchParams(search).get("service")
  
  return (
    <Layout>
      <SEO title="Enquiries" description="enquiries page" noIndex />
      <section className="section section-center">
        <Title
          title="enquiries"
          subTitle="Please complete and submit the form below and we will get back to you shortly."
        />
        <Enquiries paramsText={text} paramsType={type} paramsService={service}/>
      </section>
    </Layout>
  )
}

export default EnquiriesPage
