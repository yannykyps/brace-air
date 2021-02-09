import React from 'react'
import { Layout, SEO, Title } from "../components"

const Success = () => {
    return (
        <Layout>
        <SEO title="Success" description="successfully submitted form" noIndex />
            <section className="section section-center">
            <Title title="Thank You" subTitle="We've received your enquiry and will get back to you shortly"/>
            </section>
        </Layout>
    )
}

export default Success