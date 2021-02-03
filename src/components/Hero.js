import React from 'react'
import styled, { keyframes } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
 {
  desktop:contentfulBackground(image: {title: {eq: "background-min"}}) {
    image {
      title
      fluid(quality: 64, maxWidth: 1920){
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  mobile:contentfulBackground(image: {title: {eq: "background-min"}}) {
    image {
      title
      fluid(quality: 64, maxWidth: 490){
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

const Hero = () => {
  const {desktop, mobile} = useStaticQuery(query);
  const sources = [
    mobile.image.fluid,
    {
      ...desktop.image.fluid,
      media: `(min-width: 491px)`,
    },
  ]
    return (
        <Wrapper>
        <BackgroundImage Tag="div" className="bcg" fluid={sources} durationFadeIn={150} loading="eager" preserveStackingContext={true} alt="hero image">
        <article className="hero-info">
        <h1>BraceAir</h1>
        <p>Blackheath Refrigeration & Air Conditioning Engineering</p>
        <p>Call Us: 020 3675 0487</p>
        <button>Enquiries</button>
        </article>
        </BackgroundImage>  
        </Wrapper>
    )
}

export default Hero

const fadeIn = keyframes`
      from{
         background-color:rgb(0,0,0,0.7);
      }
      to{
        background-color:rgba(0,0,0,0.2);
      }
      `

const Wrapper = styled.header`

.bcg {
    /* MUST!!!!!! */
    min-height: 93vh;
    display: grid;
    width: 100%;
    position: relative;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }

  .bcg::before {
    opacity: 1;
  }

  .hero-info {
    /* margin-top: 10rem; */
    /* margin-bottom: 20rem; */
    text-align: center;
    color: var(--clr-white);
    width: 85vw;
    max-width: 800px;
  } 

  .hero-info p {
    color: var(--clr-white);
  }

  button {
  background: #e2000b;
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-size: clamp(0.875rem,0.875rem + 1vw,1rem);
  color: var(--clr-white);
  font-family: var(--ff-secondary);
  cursor: pointer;
  transition: var(--transition);
        &:hover {
            background: var(--clr-primary-blue);
        }
}

@media screen and (min-width: 1170px) {
  .hero-info {
    /* margin-top: 20rem; */
    /* margin-bottom: 20rem; */
    text-align: center;
    color: var(--clr-white);
    width: 85vw;
    max-width: 800px;
  } 

}
`