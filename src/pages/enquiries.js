import React from 'react'
import Layout from "../components/Layout"
import Enquries from "../components/Enquiries"
import SEO from "../components/SEO"
import Title from "../components/Title"

const enquiriesPage = () => {
    return (
        <Layout>
        <SEO title="Enquiries" description="enquiries page" noIndex />
        <section className="section section-center">
        <Title title="enquiries" subTitle="Please complete and submit the form below and we will get back to you shortly."/>
            <Enquries />
        </section>
        </Layout>
    )
}

export default enquiriesPage
