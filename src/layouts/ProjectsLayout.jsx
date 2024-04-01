import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectSideBar from '../components/ProjectSideBar/ProjectSideBar';
import Project from '../pages/Projects/Project/Project';


function ProjectsLayout() {

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    height: '88.6vh',
    width: '100%',
  }

  return (
    <>
      <div style={styles}>
        <ProjectSideBar/>
        <div style={{
          paddingInline: ".8rem",
          paddingBlock: "1rem",
          width: "100%",
          overflowY: "auto"
        }}>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default ProjectsLayout
