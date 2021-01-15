import PropTypes from "prop-types"
import React from "react"
import { FaArrowCircleRight } from 'react-icons/fa'

import '../components/main.css'

const ProjectCard = ({ title, description }) => (
  <div>
    <div class='project-title'>
      <span class='project-title-text'>{ title }</span><br />
    </div>
    <p>{ description }</p>
    <div class='arrow'>
      <FaArrowCircleRight size={28} class='menu-link'/>
    </div>
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
