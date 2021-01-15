// Gatsby supports TypeScript natively!
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"


const ProjectsPage = () => (
  <Layout>
    <SEO title="projects" />
    <h1>Projects and Experience</h1>
    <div class='projects-grid'> { mapProjects() } </div>
  </Layout>
)

const mapProjects = () => {
  return projectEntries.map((project) =>
    <ProjectCard 
      title={project.title} 
      image={project.imageName} 
      description={project.description} />
  );
}

const projectEntries = [
  {
    title: 'DTLP @ GE Aviation',
    image: 'gelogo',
    description: 'A two year rotational program with four rotations in different parts of GE\'s business',
  },
  {
    title: 'Stereo Correspondence',
    image: 'stereocor',
    description: 'An algorithm using graph cuts and alpha/beta swap to take two images of the same scene in order to dicern depth',
  },
  {
    title: 'Augmented Reality in Video',
    image: 'PS03',
    description: 'Using projective geometry, corner detection, perspective imaging, and homographies to augment images and videos into other videos',
  },
  {
    title: 'Traffic Sign Detection',
    image: 'PS02',
    description: 'A project to learn about the basics of image processing, manipulating images, and understanding structural and semantic aspects of what makes an image',
  },
  {
    title: 'KBAI Raven Project',
    image: '',
    description: 'Constructing a knowledge-based AI agent able to solve Raven\'s Progressive Matrix problems',
  },
];

export default ProjectsPage
