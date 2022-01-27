import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/images/boombox.jpeg"
          alt="boombox"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: gird;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  article {
    border: none;
  }
  .example-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
    }
  }
`

export default Images
