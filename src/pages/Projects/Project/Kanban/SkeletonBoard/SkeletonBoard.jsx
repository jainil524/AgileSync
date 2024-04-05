import React from 'react'

import Task from '../../../../../components/Kanban/Task/Task';
import Status from '../../../../../components/Kanban/Status/Status';

function SkeletonBoard() {
  return (
    <>
      <div className='board-wrapper skeleton'>
        <div className='board-header'>
          <button>Create Task</button>
        </div>
        <div className='board-body '>
          <Status>
            <Task />
            <Task />
          </Status>
          <Status>
            <Task />
            <Task />
          </Status>
          <Status>
            <Task />
            <Task />
          </Status>
          <Status>
            <Task />
            <Task />
          </Status>

        </div>
      </div>
    </>
  )
}

export default SkeletonBoard
