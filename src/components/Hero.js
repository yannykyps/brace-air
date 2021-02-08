import React from 'react'
import styled, { keyframes } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone"

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
  mobile:contentfulBackground(image: {title: {eq: "bg-mobile"}}) {
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
        <h3>Blackheath Refrigeration & Air Conditioning Engineering</h3>
        <div><a className="button" href="tel:02036750487"><HiOutlinePhone className="phone" /> 020 3675 0487</a>
        </div>
        <div>
        <a className="button" href="/enquiries/">Get A Quote</a>
        </div>
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
        background-color:rgba(0,0,0,0.4);
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
    text-align: center;
    color: var(--clr-white);
    width: 85vw;
    max-width: 800px;
    p {
      color: var(--clr-white);
    }
    div, h3 {
      margin-bottom: 1.5rem;
    }
  } 

  .phone {
    font-size: 30px;
    margin-right: 0.5rem;
    margin-bottom: -9px;
    display: inline-block;
}

  .button {
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
    text-align: center;
    color: var(--clr-white);
    width: 85vw;
    max-width: 800px;
  } 

}
`