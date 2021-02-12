import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "./Title"

const query = graphql`
  {
    allContentfulOurServices {
      nodes {
        title
        services
        slug
        image {
          fluid(quality: 64, maxWidth: 800) {
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
  const {
    allContentfulOurServices: { nodes },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section section-center">
      <Title title="Our Services" />
      {nodes.map((service, index) => {
        return (
          <div className="services-grid" key={index}>
            <div className="service-img">
              <Link to={`/${service.slug}/`} aria-label={service.title}>
                <Image fluid={service.image.fluid} alt={service.title} />
              </Link>
            </div>
            <article className="services-content">
              <Link to={`/${service.slug}/`}>
                <h3>{service.title}</h3>
              </Link>
              <div className="mdx">
                <MDXRenderer>{service.content.childMdx.body}</MDXRenderer>
              </div>
              <div>
                {service.services.map((serv, index) => {
                  return (
                    <span key={index} className="service">
                      {serv}
                    </span>
                  )
                })}
              </div>
            </article>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default OurServices

const Wrapper = styled.section`
  .service-img {
    max-width: 320px;
    width: 100%;
    margin: auto;
    img {
      border-radius: var(--radius);
    }
  }

  a {
    color: var(--clr-primary-blue);
    &:hover {
      color: var(--clr-green);
    }
  }

  .services-grid {
    display: grid;
    column-gap: 2rem;
    margin-bottom: 2rem;
    row-gap: 1rem;
  }

  .services-content {
    text-align: center;
    display: grid;
    grid-template-rows: 36px auto 72px;
    margin-bottom: 2rem;
  }

  .service {
    display: inline-block;
    margin-right: 0.3rem;
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
      grid-template-columns: 320px 1fr;
      column-gap: 2rem;
      margin-bottom: 2rem;
    }

    .services-content {
      text-align: left;
      grid-template-rows: 36px 168px 36px;
    }

    .img {
      margin: 0;
    }
  }
`
