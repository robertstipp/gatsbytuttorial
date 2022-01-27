import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Dummy text? More like dummy thicc text, amirite?</h2>
            <p>
              I'm baby aesthetic truffaut blue bottle edison bulb palo santo
              locavore roof party freegan neutra mumblecore direct trade.
              Franzen cold-pressed health goth forage, wolf direct trade
              messenger bag.
            </p>
            <p>
              Post-ironic hot chicken kale chips, food truck tofu vinyl jean
              shorts roof party prism dreamcatcher schlitz pickled. Jianbing
              fashion axe adaptogen before they sold out literally jean shorts.
              Williamsburg tattooed four dollar toast health goth authentic
              meggings.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/technology.jpeg"
            alt="fitness girl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default about
