import React from 'react'

import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard/Dashboard"
import Profile from "../pages/Profile/Profile"
import IndexLayout from '../layouts/IndexLayout'
import ProjectList from '../pages/Projects/ProjectList/ProjectsList'
import ProjectRoutes from '../routes/ProjectRoutes'
import Error404 from '../pages/Error/Error404';

function IndexRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<IndexLayout />}>
        <Route index path="dashboard" element={<Dashboard />} />
        <Route path="projectlist" element={<ProjectList />} />
        <Route path="project/*" element={<ProjectRoutes />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export default IndexRoutes