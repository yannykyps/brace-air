import React from "react"
import {
  Layout,
  SEO,
  Hero,
  OurServices,
  AboutUs,
  Quote,
  QualityService,
} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO
      title="BraceAir"
      description="BraceAir refrigeration and air conditioning services based in south east London"
    />
    <Hero />
    <OurServices />
    <Quote />
    <QualityService />
    <AboutUs />
  </Layout>
)

export default IndexPage
