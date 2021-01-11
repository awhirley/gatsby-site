import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MeImage from "../images/me.jpg"

import "../components/main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div class='grid-container'>

      <div class='image_item'>
        <img src={ MeImage }/>
      </div>

      <div class='intro_item'>
        <h1>Hi people 👋🏻</h1>

        <p>I'm Alex! I'm a software engineer with a creative side. <br />
        It's nice to meet you!</p>

      </div>

    </div>
  </Layout>
)

export default IndexPage
