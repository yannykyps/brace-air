import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from './Title'

const query = graphql `
{
    allContentfulOurServices {
      nodes {
        title
        services
        image {
            fluid(quality: 64, maxWidth: 800){
                ...GatsbyContentfulFluid_withWebp
              }
        }
        content {
          childMdx {
            body
          }
        }
      }
    }
  }
`

const OurServices = () => {
    const {allContentfulOurServices:{nodes}} = useStaticQuery(query);
    // const {allContentfulOurServices:{nodes:{services}}} = useStaticQuery(query);
    return (
        <Wrapper>
            <div className="section section-center">
            <Title title="Our Services" />
            {nodes.map((service, index) => {
              
                return (
                    <div className="services-grid" key={index}>
                    <div className="img">
                    <Image fluid={service.image.fluid} />
                    </div>
                    <div className="services-content">
                    <h3>{service.title}</h3>
                    <div className="mdx">
                    <MDXRenderer>{service.content.childMdx.body}</MDXRenderer> 
                    </div>
                    <div>
                    {service.services.map((serv, index) => {
                      return (
                        <span key={index} className="service">{serv}</span>
                      )
                    })}
                    </div>
                    </div>
                    </div>
                )
            })}
            </div>
        </Wrapper>
    )
}

export default OurServices

const Wrapper = styled.section`

.img {
    max-width: 300px;
    width: 100%;
    margin: auto;
    img {
        border-radius: var(--radius);
    }
}

.services-grid {
    display: grid;
    /* grid-template-columns: 300px 1fr; */
    column-gap: 2rem;
    margin-bottom: 2rem;
    row-gap: 1rem;
}

.services-content{
  text-align: center;
  display: grid;
  grid-template-rows: 36px auto 72px; 
  margin-bottom: 2rem;

}

.service {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: var(--clr-green);
    color: var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      background: var(--clr-primary-blue);
      cursor: default;
    }
  }

@media screen and (min-width: 960px) {

  .services-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    column-gap: 2rem;
    margin-bottom: 2rem;
}

.services-content{
  text-align: left;
  grid-template-rows: 36px 152px 36px; 
}

.img {
  margin: 0;
}
}

`