import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectsList from '../pages/Projects/ProjectsList';


function ProjectsLayout() {


  return (
    <>
      <ProjectsList/>
      <Outlet/>
    </>
  )
}

export default ProjectsLayout
