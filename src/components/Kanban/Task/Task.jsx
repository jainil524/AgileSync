import React from 'react'

import "../css/TaskCard.css";


function Task({title}) {
  return (
    <div className='task'>
      {title}
    </div>
  )
}

export default Task
