import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import '../components/main.css'

const Header = ({ siteTitle }) => (
  <header class='header-style'>
    <div class='title'>
      <h3 class='bottom-zero'>
        <Link to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
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
