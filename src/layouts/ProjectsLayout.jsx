import React from 'react'
import { Outlet } from 'react-router-dom'
import Projects from '../pages/Projects/Projects';


function ProjectsLayout() {


  return (
    <>
      <Projects/>
      <Outlet/>
    </>
  )
}

export default ProjectsLayout
