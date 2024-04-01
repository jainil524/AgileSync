import React from 'react'

import "../css/StatusCard.css";

function Status({ title, children }) {
  return (
    <div className='status'>
      <div className='status-header'>
        <h3>{title}</h3>
      </div>
      <div className='task-list'>
      {children}
      </div>
    </div>
  )
}

export default Status
