import React from 'react'

import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/Dashboard/Dashboard"
import Profile from "../pages/Profile/Profile"
import IndexLayout from '../layouts/IndexLayout'
import ProjectList from '../pages/Projects/ProjectList/ProjectsList'

function IndexRoutes() {
  return (
    <Routes>
        <Route path="/*" element={<IndexLayout/>}>
          <Route index path="dashboard" element={<Dashboard/>} />
          <Route path="projects" element={<ProjectList/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
    </Routes>
  )
}

export default IndexRoutes