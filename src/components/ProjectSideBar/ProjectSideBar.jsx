import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser, FaCogs } from 'react-icons/fa'

import './css/ProjectSideBar.css';

function ProjectSidebar() {

  return (
    <div className="project-sidebar">

      <div className="project-sidebar__content">
        <ul>
          <li>
            <NavLink to="dashboard" data-label="Dashboard" className="project-sidebar__link">
              <img src="../../../src/assets/img/Dashboard_icon.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="kanban" data-label="Kanban" className="project-sidebar__link">
              <img src="../../../src/assets/img/kanban-board.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="teammates" data-label="TeamMates" className="project-sidebar__link">
              <img src="../../../src/assets/img/Teammates-icon.svg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="dicussion" data-label="Discussion" className="project-sidebar__link">
              <img src="../../../src/assets/img/Discussion-icon.svg" alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectSidebar