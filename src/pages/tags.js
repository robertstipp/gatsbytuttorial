import React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Tags = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Dummy text? More like dummy thicc text, amirite?</h2>
            <p></p>
            <p>
              Post-ironic hot chicken kale chips, food truck tofu vinyl jean
              shorts roof party prism dreamcatcher schlitz pickled. Jianbing
              fashion axe adaptogen before they sold out literally jean shorts.
              Williamsburg tattooed four dollar toast health goth authentic
              meggings.
            </p>
          </article>
          <StaticImage
            src="../assets/images/boombox.jpeg"
            alt="fitness girl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default Tags
