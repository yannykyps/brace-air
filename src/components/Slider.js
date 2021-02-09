import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FiChevronRight } from "@react-icons/all-files/fi/FiChevronRight"
import { FiChevronLeft } from "@react-icons/all-files/fi/FiChevronLeft"

const query = graphql`
  {
    slider: allContentfulSlider {
      nodes {
        index
        category
        image {
          title
          fluid(quality: 64, maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const Slider = ({ category }) => {
  const {
    slider: { nodes },
  } = useStaticQuery(query)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = nodes.filter(cat => cat.category === category).length - 1
    const auto = setInterval(() => setIndex(index + 1), 5000)
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
    return () => clearInterval(auto)
  }, [index, nodes, category])
  return (
    <Wrapper className="section-center">
      <div className="slider-height">
        {nodes
          .filter(cat => cat.category === category)
          .map((item, itemIndex) => {
            let position = "nextSlide"
            if (itemIndex === index) {
              position = "activeSlide"
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === item.length - 1)
            ) {
              position = "lastSlide"
            }
            return (
              <article className={position} key={itemIndex}>
                <div className="img">
                  <Image fluid={item.image.fluid} alt={item.image.title} />
                </div>
              </article>
            )
          })}
        <button
          className="prev"
          aria-label="previous"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          aria-label="next"
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;

  .slider-height {
    height: 425px;
    position: relative;
    max-width: 320px;
    margin: auto;
  }

  .img {
    max-width: 320px;
    width: 100%;
  }

  .slider-grid {
    display: grid;
    padding-left: 2.5rem;
  }

  article {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--clr-primary-blue);
    color: var(--clr-white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-green);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    .slider-height {
      height: 531px;
      max-width: 400px;
    }
    .img {
      max-width: 400px;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 986px) {
    .slider-height {
      margin: 0;
    }
  }
`
