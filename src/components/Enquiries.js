import React from "react"
import styled from "styled-components"

const Enquiries = ({ paramsText, paramsType, paramsService }) => {
  return (
    <Wrapper>
      <article className="contact-form">
        <div className="contact">
          <h4>Address</h4>
          <address>
            Woolacombe Road, Blackheath,
            <br />
            London SE3 8QH
          </address>
          <h4>Telephone</h4>
          <address>
            020 3675 0487
            <br />
            07957 256927 (Out of hours)
          </address>
          <h4>Email</h4>
          <address>
            <a className="default-a" href="mailto:info.brace@yahoo.co.uk">
              info.brace@yahoo.co.uk
            </a>
          </address>
          <h4>Working Hours</h4>
          <address>
            Mon - Fri: 0830 – 1730
            <br />
            Saturday: 0830 - 1600
            <br />
            Sunday: Closed
          </address>
        </div>
        <form
          name="contact"
          action="/success/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          method="POST"
        >
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="telephone (optional)"
              className="form-control"
            />
            <textarea
              name="address"
              placeholder="address/location"
              rows="5"
              className="form-control"
            ></textarea>
            <select
              name="service"
              className="form-control"
              defaultValue={paramsService ? paramsService : "etype"}
            >
              <option value="etype" disabled>
                Type of Enquiry...
              </option>
              <option value="sales">Sales</option>
              <option value="service">Service</option>
              <option value="other">Other</option>
            </select>
            <select
              name="equipment"
              defaultValue={paramsType ? paramsType : "type"}
              className="form-control"
            >
              <option value="type" disabled>
                Type of Equipment...
              </option>
              <option value="refrigeration">Refrigeration</option>
              <option value="ac">Air Conditioning</option>
              <option value="coldroom">Coldroom</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="enquirie"
              placeholder="enquiry/fault description"
              rows="8"
              className="form-control"
              defaultValue={paramsText && paramsText}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit
          </button>
        </form>
      </article>
      <div className="map">
        <p>
          We are based in Blackheath, Greenwich – Southeast London, providing
          easy access to anywhere within the M25 area, plus the home counties,
          Surrey, Kent and Essex
        </p>
        <iframe
          title="Braceair location map"
          src="https://maps.google.com/maps?q=Blackheath%20Refrigeration%20&%20Air%20Conditioning&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
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
    address {
      margin-bottom: 1.5rem;
    }
    h4 {
      margin-bottom: 0.2rem;
    }
  }

  select {
    font-family: var(--ff-primary);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 100%;
  }

  .map {
    margin-top: 4rem;
  }

  iframe {
    width: 100%;
    height: 600px;
    border-radius: var(--radius);
  }

  input {
    font-size: 100%;
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
    &:hover {
      background: var(--clr-green);
    }
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
    border: 1px solid var(--clr-green);
    margin-bottom: 1.25rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    &::placeholder {
      font-family: var(--ff-primary);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      &:focus {
        border: 1px solid var(--clr-primary-blue);
        outline: none;
      }
    }
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
