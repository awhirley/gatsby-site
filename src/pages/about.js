import React from "react"

import Header from '../components/header';

export default function About() {
  return (
    <>
    <Header siteTitle='test header' />
    <div style={{ color: `teal` }}>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
    </>
  )
}