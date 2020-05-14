import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div class='grid-container'>

      <div class='image_item'>
        <Image />
      </div>

      <div class='intro_item'>
        <h1>Hi people</h1>

        <p>I'm Alex!</p>
        <p><code>Here's my website.</code></p>
      
        <Link to="/about/">Read more about me here!</Link>
      </div>

    </div>
  </Layout>
)

export default IndexPage
