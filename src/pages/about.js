// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the About Me page.</h1>
    <p>psych!!! no more info here yet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
