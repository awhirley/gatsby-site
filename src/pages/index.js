import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/homepage.css"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div class='grid-container'>

      <div class='image_item'>
        <Image />
      </div>

      <div class='intro_item'>
        <h1>Hi people</h1>

        <p>Welcome to your new Gatsby site.</p>
        <p><code>Now go build something great.</code></p>
      
        <Link to="/page-2/">Go to page 2</Link>
      </div>

    </div>
  </Layout>
)

export default IndexPage
