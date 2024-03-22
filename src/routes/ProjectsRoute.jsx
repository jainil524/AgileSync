import React from 'react'

import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/Projects/Dashboard/Dashboard"
import KanbanBoard from "../pages/Projects/Kanban/KanbanBoard"
import Teammates from "../pages/Projects/TeamMates/Teammates"
import ProjectsLayout from '../layouts/ProjectsLayout'

function ProjectsRoute() {
  return (
    <Routes>
        <Route path="/*" element={<ProjectsLayout/>}>
          <Route index path="dashboard" element={<Dashboard/>} />
          <Route path="kanban" element={<KanbanBoard/>} />
          <Route path="teammates" element={<Teammates/>} />
        </Route>
    </Routes>
  )
}

export default ProjectsRoute