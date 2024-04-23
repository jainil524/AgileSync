import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import DashboardIcon from '../../../public/img/Dashboard_icon.svg';
import KanbanIcon from '../../../public/img/Kanban_icon.svg';
import TeammatesIcon from '../../../public/img/Teammates_Icon.svg'
import DiscussionIcon from '../../../public/img/Discussion_icon.svg';

import './css/ProjectSideBar.css';

// Add the Project Details page instade of the project Dashboard

function ProjectSidebar() {

  const { projectid } = useParams();

  return (
    <div className="project-sidebar" >

      <div className="project-sidebar__content">
        <ul>
          <li>
            <NavLink to="projectdetails" data-label="Project Details" className="project-sidebar__link">
              <img src={DashboardIcon} />
            </NavLink>
          </li>
          <li>
            <NavLink to="kanban" data-label="Kanban" className="project-sidebar__link">
              <img src={KanbanIcon} />
            </NavLink>
          </li>
          <li>
            <NavLink to="teammates" data-label="TeamMates" className="project-sidebar__link">
              <img src={TeammatesIcon} />
            </NavLink>
          </li>
          <li>
            <NavLink to="dicussion" data-label="Discussion" className="project-sidebar__link">
              <img src={DiscussionIcon} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectSidebar