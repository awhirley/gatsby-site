import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div class='container-fluid row justify-content-center'>
      <div class='col-sm-4'>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
      <div class='col-sm-4'>
        <h1>Hi people</h1>

        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      
        <Link to="/page-2/">Go to page 2</Link>
        
      </div>
    </div>
  </Layout>
)

export default IndexPage
