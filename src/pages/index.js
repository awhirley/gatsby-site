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
      
        <h4>
          <a href="/about/" class='menu-link'>> About</a><br />
          <a href="/projects/" class='menu-link'>> Projects</a><br />
          <a href="/outreach/" class='menu-link'>> Outreach</a><br />
          <a href="/contact/" class='menu-link'>> Contact</a><br />
        </h4>
      </div>

    </div>
  </Layout>
)

export default IndexPage
