import PropTypes from "prop-types"
import React from "react"
import { FaArrowCircleRight } from 'react-icons/fa'

import '../components/main.css'

const ProjectCard = ({ title, description, link }) => (
  <div>
    <div class='project-title'>
      <span class='project-title-text'>{ title }</span>
      <a class='project-title-text feature-flagged' href={link}>{ title }</a>
    </div>
    <p>
      { description }<br />
    </p>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

ProjectCard.defaultProps = {
  title: '',
  description: '',
}

export default ProjectCard
