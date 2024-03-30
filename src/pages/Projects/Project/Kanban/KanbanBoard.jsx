import React from 'react'

import Task from "../../../../components/Kanban/Task/Task"
import Status from "../../../../components/Kanban/Status/Status"

import './css/KanbanBoard.css'

function KanbanBoard() {
  return (
    <>
      <div className='board-wrapper'>
        <div className='board-header'>
          <button>Create Task</button>
        </div>
        <div className='board-body'>
            <Status title="TODO">
                <Task title="TASK1"/>
                <Task title="TASK4"/>
            </Status>
            <Status title="IN PROGRESS">
                <Task title="TASK2"/>
                <Task title="TASK3"/>
            </Status>
        </div>
      </div>
    </>
  )
}

export default KanbanBoard
