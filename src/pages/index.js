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
        <h1>Hi people 👋🏻</h1>

        <p>I'm Alex! I'm a software engineer with a creative side. It's nice to meet you!</p>
      
        <Link to="/about/">> About</Link>
        <Link to="/projects/">> Projects</Link>
        <Link to="/outreach/">> Outreach</Link>
        <Link to="/contact/">> Contact</Link>
      </div>

    </div>
  </Layout>
)

export default IndexPage
