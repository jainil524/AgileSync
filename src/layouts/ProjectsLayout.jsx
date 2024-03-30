import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectsList from '../pages/Projects/ProjectList/ProjectsList';


function ProjectsLayout() {


  return (
    <>
      <ProjectsList/>
      <Outlet/>
    </>
  )
}

export default ProjectsLayout
