// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/main.css"

import AustinImage from "../images/austin.jpg"
import BearImage from "../images/bear.jpg"
import DigitalImage from "../images/digital.jpg"
import GrandCanyonImage from "../images/grandcanyon.jpg"
import HarryPotterImage from "../images/harrypotter.jpg"
import PragueImage from "../images/prague.jpg"
import SnowImage from "../images/snow.jpg"
import ZionImage from "../images/zion.jpeg"
import ZiplineImage from "../images/zipline.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="overflow">
      <div class='about-grid'>
        <div class="about-image">
          <img src={ ZiplineImage }/>
          <img src={ DigitalImage }/>
          <img src={ SnowImage }/>
          <img src={ GrandCanyonImage }/>
          <img src={ HarryPotterImage }/>
          <img src={ BearImage }/>
          <img src={ PragueImage }/>
          <img src={ AustinImage }/>
          <img src={ ZionImage }/>
        </div>

        <div class="about-text">
          <h1>Let's get to know each other!</h1>

          <p>
            Hey friends. My name is Alex Whirley. Currently I'm a front end developer living in Cincinnati, Ohio.
            I'm a midwesterner at heart! I grew up in southern Indiana and graduated from Indiana University (go hoosiers!).
          </p>

          <p>
            I love to travel, hike and camp. I have a goal to go to every National Park in the United States, although
            I am only at the beginning of that journey. :)
          </p>

          <p>
            After graduating IU, I was lucky enough to begin my career at General Electric in their Ditigal Technology Leadership Program.
            It's a two year rotational program with four 6-month rotations. I was able to move around to different locations,
            experience diverse roles, and gain a large breadth of knowledge about various business processes,
            organizations within the business, and build my network right out of college. <br />
            <a href="/dtlp/" class='menu-link left-space'>Learn more about my experiences on DTLP &rarr;</a>
          </p>

          <p>
            A few months after I began my new job, I suppose I must've missed classes and homework because I decided to begin
            classes towards a Masters Degree at Georgia Tech in their OMSCS program. Although there has been some stress and occasional procrastination,
            I have been able to learn some really cool things and complete very interesting projects.
            I am currently working on my 9th class out of 10, so I'll see you at graduation at the end of 2020! <br />
            <a href="/projects/" class='menu-link left-space'>Learn more about projects I've done during the program &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
