import React from 'react'
import Layout from '../components/Layout'
import Manufacturers from '../components/Manufacturers'
import Sales from '../components/Sales'
import SEO from '../components/SEO'
import Title from '../components/Title'

const salesEquipment = () => {
    return (
        <Layout>
            <SEO title="sales equipment" description="refrigeration and air conditioning units sales equipment" />
            <section className="section section-center">
            <Title title="Sales Equipment" subTitle="Supplying of all types of  commercial and industrial refrigeration and air conditioning units" />
            <Sales />
            <Manufacturers />
            </section>
        </Layout>
    )
}

export default salesEquipment
