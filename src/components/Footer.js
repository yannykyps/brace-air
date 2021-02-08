import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"

const query = graphql`
{
    certs: contentfulCertified {
        image {
            title
            fluid(quality: 64, maxWidth: 300){
                ...GatsbyContentfulFluid_withWebp
              }
        }
      
    }
  }
`
const Footer = () => {
    const {certs:{image}} = useStaticQuery(query)
    return (
        <Wrapper>
        <div className="section-center img-grid">
        {image.map((img, index) => {
            return (
                <div className={`cert-img-${img.title}`} key={index}>
                <Image fluid={img.fluid} alt={img.title}/>
                </div>
            )
        })}
        </div>
         <div className="footer">
         <div>
         <h4>Address</h4>
         <ul>
            <li>Woolacombe Road, Blackheath,</li>
            <li>London SE3 8QH</li>
            <li>Company Reg No. 07480816</li>
            <li>REFCOM Reg F-Gas No. REF1009582</li>
        </ul>
        </div>
        <div>
        <h4>Contact Us</h4>
        <ul>
            <li>Telephone: 020 3675 0487</li>
            <li>Mobile: 07957 256927 (Out of hours)</li>
            <li>Email: <a href="mailto:info.brace@yahoo.co.uk">info.brace@yahoo.co.uk</a></li>
        </ul>
        </div>
        <div>
        <h4>Working Hours</h4>
        <ul>
            <li>Mon - Fri: 0830 – 1730</li>
            <li>Saturday: 0830 - 1600</li>
            <li>Sunday: Closed</li>
        </ul>
        </div>
      
        <div className="copyright"><p>&copy; {new Date().getFullYear()} BraceAir | Website by <a href="https://www.yannyweb.com/" target="_blank"  rel="noreferrer">yannyWeb</a></p>
        </div>
         </div>   
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
border-top: 2px dotted var(--clr-primary-blue);
padding-top: 3rem;

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
/* grid-template-columns: 1fr 1fr 1fr;  */
}

.img-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    margin-bottom: 3rem;
    column-gap: 0.5rem;

}

.cert-img-refcom, .cert-img-environmentagency, .cert-img-pasma {
    max-width: 218px;
    width: 100%;
}


.cert-img-acrib {
    max-width: 200px;
    width: 100%;
}

.cert-img-cscs {
    max-width: 200px;
    width: 100%;
}

.copyright {
    
    align-self: end;
    text-align: center;
    p, a {
        color: var(--clr-white);
    }  
}

ul {
    a {
        color: var(--clr-white);  
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
