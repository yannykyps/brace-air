import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook"
import { AiOutlineVerticalAlignTop } from "@react-icons/all-files/ai/AiOutlineVerticalAlignTop"
import scrollTo from "gatsby-plugin-smoothscroll"

const query = graphql`
  {
    certs: contentfulCertified {
      image {
        title
        fluid(quality: 64, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
const Footer = () => {
  const {
    certs: { image },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <section className="section-center img-grid">
        {image.map((img, index) => {
          return (
            <div className={`cert-img-${img.title}`} key={index}>
              <Image fluid={img.fluid} alt={img.title} />
            </div>
          )
        })}
      </section>
      <div className="top">
        <button onClick={() => scrollTo("#top")} aria-label="Back to Top">
          <AiOutlineVerticalAlignTop />
        </button>
      </div>
      <div className="footer">
        <div>
          <h4>Address</h4>
          <address>
            Woolacombe Road, Blackheath,
            <br />
            London SE3 8QH
            <br />
            Company Reg No. 07480816
            <br />
            REFCOM Reg F-Gas No. REF1009582
          </address>
        </div>
        <div>
          <h4>Contact Us</h4>
          <address>
            Telephone: 020 3675 0487
            <br />
            Mobile: 07957 256927 (Out of hours)
            <br />
            Email:{" "}
            <a href="mailto:info.brace@yahoo.co.uk">info.brace@yahoo.co.uk</a>
          </address>
          <div className="fb-img">
            <a
              href="https://www.facebook.com/braceltd.braceair"
              aria-label="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrFacebook />
            </a>
          </div>
        </div>
        <div>
          <h4>Working Hours</h4>
          <address>
            Mon - Fri: 0830 – 1730
            <br />
            Saturday: 0830 - 1600
            <br />
            Sunday: Closed
          </address>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} BraceAir | Website by{" "}
            <a
              href="https://www.yannyweb.com/"
              target="_blank"
              rel="noreferrer"
            >
              yannyWeb
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  border-top: 2px dotted var(--clr-primary-blue);
  padding-top: 3rem;

  a {
    color: var(--clr-white);
    &:hover {
      color: var(--clr-primary-blue);
    }
  }

  p {
    color: var(--clr-white);
  }

  .top {
    text-align: center;
    margin-bottom: -2.6rem;
    button {
      font-size: 2rem;
      color: var(--clr-white);
      transition: var(--transition);
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      &:hover {
        color: var(--clr-primary-blue);
      }
    }
  }

  .footer {
    background: var(--clr-primary-grey);
    color: var(--clr-white);
    display: grid;
    text-align: center;
    padding: 3rem 3rem 0 3rem;
    margin: auto;
    height: auto;
    width: 100%;
    row-gap: 2rem;
  }

  .img-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-bottom: 3rem;
    column-gap: 0.5rem;
  }

  .cert-img-refcom,
  .cert-img-environmentagency,
  .cert-img-pasma {
    max-width: 218px;
    width: 100%;
  }

  .cert-img-acrib,
  .cert-img-cscs {
    max-width: 200px;
    width: 100%;
  }

  .copyright {
    align-self: end;
    text-align: center;
  }

  .fb-img {
    margin-top: 1rem;
    a {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 768px) {
    .footer {
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
    .copyright {
      grid-area: 3 / 1 / span 1 / span 2;
    }
  }
  @media screen and (min-width: 960px) {
    .footer {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .copyright {
      grid-area: 2 / 1 / span 1 / span 3;
    }
  }
`
