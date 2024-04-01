import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaCogs } from 'react-icons/fa'

import './css/ProjectSideBar.css';

function ProjectSidebar() {
  return (
    <div className="project-sidebar">

      <div className="project-sidebar__content">
        <ul>
          <li>
            <NavLink to="dashboard" className="project-sidebar__link">
              <FaHome size={16} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="kanban" className="project-sidebar__link">
            <img src="../../../src/assets/img/kanban-board.svg" />
              <span>Kanban</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="teammates" className="project-sidebar__link">
              <FaUser size={16} />
              <span>Teammates</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings" className="project-sidebar__link">
              <FaCogs size={16} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectSidebar