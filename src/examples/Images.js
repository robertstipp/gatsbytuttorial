import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
import bigger from "../assets/images/bigger.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpg" alt="food" />
      <h2>gatsby images</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
