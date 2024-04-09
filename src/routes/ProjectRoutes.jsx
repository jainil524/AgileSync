import React from 'react'

import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/Projects/Project/Dashboard/Dashboard"
import KanbanBoard from "../pages/Projects/Project/Kanban/KanbanBoard"
import Teammates from "../pages/Projects/Project/TeamMates/Teammates"
import ProjectsLayout from '../layouts/ProjectsLayout'
import Error404 from '../pages/Error/Error404';

function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/:projectid/*" element={<ProjectsLayout />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path="kanban" element={<KanbanBoard />} />
        <Route path="teammates" element={<Teammates />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default ProjectRoutes