import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import OurServices from "../components/OurServices"
import AboutUs from "../components/AboutUs"
import Quote from "../components/Quote"
import QualityService from "../components/QualityService"

const IndexPage = () => (
  <Layout>
    <SEO title="BraceAir" description="BraceAir refrigeration and air conditioning services based in south east London" />
    <Hero />
    <OurServices />
    <Quote />
    <QualityService />
    <AboutUs />
  </Layout>
)

export default IndexPage
