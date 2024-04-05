import React from 'react'

import "../css/TaskCard.css";
import { Avatar, AvatarGroup } from '@mui/material';
import { FaCalendar } from 'react-icons/fa';

function Task({ title, tags = [], description = "", EndDate = null, Assigness = [], TotalSubTasks = 0, CompletedSubTask = 0, isDragging = false }) {

  

  return (
    <div className={isDragging ? "task dragging" : "task"}>
      <div className="tag-container">
        {
          tags.map((tag, index) => (
            <span key={index} className='tag'>{tag}</span>
          ))
        }
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="task-info">
        {
          EndDate 
            ?
              (
                <span className="enddate" title={EndDate}>
                  <FaCalendar color='#777' size={16} />
                  <span>{EndDate}</span></span>
              ) 
            : 
              null
        }
        {
          TotalSubTasks != 0 
            ? 
              (
                <span className="subtask-estimation">
                  <img src="../../../src/assets/img/diagram-subtask.svg" /><span className="subtask-estimation__value">       {CompletedSubTask}/{TotalSubTasks}</span>
                </span>
              ) 
            :
              null
        }
      </div>
      {
        Assigness.length > 0
          ? 
            (
              <div className="assignee">
                <AvatarGroup max={3}>
                  {
                    Assigness.map((assignee, index) => (
                      <Avatar key={index} alt="Remy Sharp" src={assignee} />
                    ))
                  }
                </AvatarGroup>
              </div>
            )
          : 
            null
      }
    </div>
  )
}

export default Task
