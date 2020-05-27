// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ProjectsPage = () => (
  <Layout>
    <SEO title="projects" />
    <h1>Hi from the Projects page.</h1>
    <p>psych!!! no more info here yet</p>
    <a href="/" class='menu-link'>&larr; back home</a><br />
    <a href="/about/" class='menu-link'>&larr; back to the About page</a>
  </Layout>
)

export default ProjectsPage
