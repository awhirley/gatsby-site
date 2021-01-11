import React from "react"
import { FaFortAwesome, FaUserAstronaut, FaFolderOpen, FaEnvelope } from 'react-icons/fa'

import '../components/main.css'

const Sidebar = ({ activeSelection }) => (
  <div class='sidebar-style' id='sidebar'>
    <a href="/" id="home">
      <span class="menu-text">home</span>
      <FaFortAwesome size={25} class='sidebar-icon'/>
    </a>
    <a href="/about/" id="about">
      <span class="menu-text">about me</span>
      <FaUserAstronaut size={25} class='sidebar-icon'/>
    </a>
    <a class='feature-flagged' href="/projects/" id="experience">
      <span class="menu-text">experience</span>
      <FaFolderOpen size={25} class='sidebar-icon'/>
    </a>
    <a href="/contact/" id="contact">
      <span class="menu-text">contact</span>
      <FaEnvelope size={25} class='sidebar-icon'/>
    </a>
  </div>
)

export default Sidebar
