import React from 'react'
import styled from "styled-components"

const Enquiries = () => {
    return (
      <Wrapper>
      <article className="contact-form">
      <div className="contact">
      <ul>
        <h4>Address</h4>
            <li>Woolacombe Road, Blackheath,</li>
            <li>London SE3 8QH</li>
        </ul>
        <ul>
        <h4>Telephone</h4>
            <li>020 3675 0487</li>
            <li>07957 256927 (Out of hours)</li>   
        </ul>
        <ul>
          <h4>Email</h4>
          <li><a href="mailto:info.brace@yahoo.co.uk">info.brace@yahoo.co.uk</a></li>
        </ul>
        <ul>
        <h4>Working Hours</h4>
            <li>Mon - Fri: 0830 – 1730</li>
            <li>Saturday: 0830 - 1600</li>
            <li>Sunday: Closed</li>
        </ul>
      </div>
        <form name="contact" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST">
        <p class="hidden">
    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
  </p>
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="name"
            className="form-control" required />
            <input type="email" name="email" placeholder="email"
            className="form-control" required />
            <input type="text" name="phone" placeholder="phone number(optional)"
            className="form-control" />
            <textarea name="address" placeholder="address/location" rows="5" className="form-control" ></textarea>
            <textarea name="enquirie" placeholder="enquiry/fault description" rows="8" className="form-control" required></textarea>
          </div>
          <button type="submit" className="submit-btn btn">submit</button>
        </form>
      </article>
      <div className="map">
      <p>We are based in Blackheath, Greenwich – Southeast London, providing easy access to anywhere within the M25 area, plus the home counties, Surrey, Kent and Essex</p>
      <iframe title="Braceair location map" src="https://maps.google.com/maps?q=Blackheath%20Refrigeration%20&%20Air%20Conditioning&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
      </div>
      </Wrapper>
    )
}

export default Enquiries

const Wrapper = styled.div`

.contact-form {
  text-align: center;
  transition: var(--transition);
  margin: 2rem 0;
  display: grid;
}

.contact {
  padding-top: 0;
  text-align: center;
  ul {
    margin-bottom: 1.5rem;
  }
  h4 {
    margin-bottom: 0.2rem;
  }
}

.map {
  margin-top: 4rem;
}

iframe {
  width: 100%;
  height: 600px;
  border-radius: var(--radius);
}

.hidden {
  visibility: hidden;
  margin: 0 0 -2rem 0;
}

form {
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  padding-top: 1rem;
  transition: var(--transition);
  &:hover {
    box-shadow: var(--dark-shadow);
  }
}

.submit-btn {
  display: inline-block;
  width: 100%;
  padding: 1rem;
  border: 2px solid transparent;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
  background: var(--clr-primary-blue);
  color: var(--clr-white);
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-weight: 700;
}

.submit-btn:hover {
  background: var(--clr-green);
}

.contact-form h3 {
  padding-top: 1.25rem;
}

.form-group {
  padding: 1rem 1.5rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-primary-green);
  margin-bottom: 1.25rem;
  background: var(--clr-white);
  border-radius: var(--radius);
}

.form-control::placeholder {
  font-family: var(--ff-primary);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}

.form-control:focus {
  border: 1px solid var(--clr-primary-blue);
  outline: none;
}

@media screen and (min-width: 960px) {

  .contact-form {
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
}  

.contact {
  text-align: left;
  padding-top: 1rem;
}
}
`