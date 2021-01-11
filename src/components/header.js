import PropTypes from "prop-types"
import React from "react"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import '../components/main.css'

const Header = ({ siteTitle }) => (
  <header class='header-style'>
    <div class='title'>
      <h3>
        <a href="/" class='link-style browser' >
          {siteTitle}
        </a>
        <a href="/" class='link-style mobile' >
          alexwhirley
        </a>
      </h3>
    </div>
    <div class='menu'>
      <a href='https://www.linkedin.com/in/alexwhirley/'><FaLinkedin size={25} class='icon'/></a>
      <a href='https://github.com/awhirley/'><FaGithubSquare size={25} class='icon'/></a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
