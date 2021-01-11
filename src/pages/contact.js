// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <div class='contact-grid'>

      <div class='contact-text'>
        <h2>Let's chat. 📲</h2>
        <p>
          Email me! &rarr; <a href="mailto:alexwhirley@gmail.com" class='menu-link'>alexwhirley@gmail.com</a><br />
          Connect with me! &rarr; <a href="https://www.linkedin.com/in/alexwhirley/" class='menu-link'>LinkedIn</a><br />
          Check out my code &rarr; <a href="https://github.com/awhirley/" class='menu-link'>GitHub</a>
        </p>
      </div>

    </div>
  </Layout>
)

export default ContactPage
