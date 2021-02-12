import React from "react"
import { Link } from "gatsby"
import { Banner, Layout, Manufacturers, Sales, SEO, Title } from "../components"

const salesEquipment = () => {
  return (
    <Layout>
      <SEO
        title="sales equipment"
        description="refrigeration and air conditioning units sales equipment"
      />
      <section className="section section-center">
        <Title
          titleH1="Sales Equipment"
          subTitle="Supplying of commercial and industrial refrigeration and air conditioning units"
        />
        <div className="sales-info">
        <p>We work with all the leading manufacturers and source all our equipment at very attractive prices. If you need advice about what unit is suitable for your needs, we can provide you with a list of recommendations for you to choose from. <a className="default-a" href="tel:02036750487">Call us</a> or fill out our <Link className="default-a" to="/enquiry/">enquiry form</Link>.</p>
        </div>
        <Sales />
        <Manufacturers />
      </section>
      <Banner />
    </Layout>
  )
}

export default salesEquipment
