import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div>
      Projects <br />
      <Link to="dashboard">Project Dashboard</Link><br />
      <Link to="kanban">Kanban</Link><br />
      <Link to="teammates">teammates</Link><br />
    </div>
  )
}

export default Projects
