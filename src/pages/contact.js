import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              I'm baby mustache humblebrag bicycle rights photo booth whatever,
              wolf tote bag leggings. 90's food truck knausgaard direct trade
              street art neutra humblebrag gochujang swag man braid. Street art
              adaptogen williamsburg polaroid sriracha heirloom. Hashtag cronut
              wolf paleo banjo. Cloud bread polaroid actually hammock mixtape.
            </p>

            <p>
              Bushwick bitters chia, hell of umami distillery organic migas
              poutine photo booth gastropub trust fund cornhole. Semiotics
              copper mug live-edge, kogi farm-to-table keffiyeh kale chips
              jianbing green juice. Migas yr sartorial truffaut williamsburg
              DIY. Shoreditch skateboard XOXO flannel dreamcatcher kogi. Poutine
              tofu normcore cornhole typewriter bushwick unicorn meh palo santo
              coloring book cardigan seitan keffiyeh pop-up. Vexillologist 90's
              post-ironic, four dollar toast etsy seitan brunch neutra pug
              raclette literally try-hard keytar bespoke flannel.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" email="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="messages" className="message">
                  <textarea name="message" id="message"></textarea>
                </label>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
