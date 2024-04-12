import React from 'react';
import "../css/TaskCard.css";
import { Avatar, AvatarGroup } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { toDDsMM } from '../../../utils/changeDateFormat';

function Task({ task = null, isDragging = false }) {
  let {
    title,
    tags = [],
    description = "",
    EndDate = null,
    Assigness = [],
    TotalSubTasks = 0,
    CompletedSubTask = 0,
    Progress = 0,
    Priority = null
  } = task;

  return (
    <div className={isDragging ? "task dragging" : "task"}>
      <div className="tag-container">
        {tags.map((tag, index) => (
          <span key={tag.id} style={{ backgroundColor: tag.color }} className='tag'>{tag.title}</span>
        ))}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="task-info">
        {
          EndDate
            ?
            (
              <span className="enddate" title={`Task End-Date: ${new Date(EndDate).toLocaleDateString()}`}>
                <img src="../../../public/img/Calendar-icon.svg" />
                <span>
                  {
                    toDDsMM(EndDate)
                  }
                </span>
              </span>
            )
            :
            null
        }
        {
          TotalSubTasks != 0
            ?
            (
              <span className="subtask-estimation" title={`Sub Tasks: ${CompletedSubTask} out of ${TotalSubTasks} is completed`}>
                <img src="../../../public/img/SubTask-icon.svg" /><span className="subtask-estimation__value">       {CompletedSubTask}/{TotalSubTasks}</span>
              </span>
            )
            :
            null
        }
      </div>
      <div className='info-wrapper'>

        {
          Assigness.length > 0
            ?
            (
              <div className="assignee">
                <AvatarGroup max={3}>
                  {
                    Assigness.map((assignee) => (
                      <Avatar key={assignee.id} alt={assignee.name} src={assignee.profile_url} />
                    ))
                  }
                </AvatarGroup>
              </div>
            )
            :
            null
        }

        {
          Progress > 0
            ?
            (
              <div className="progress">
                <CircularProgress data-progress={100} size={28} variant="determinate" value={100} />
              </div>
            )
            :
            null
        }
        {
          Priority != null
            ?
              (
                <div className="priority">
                  {
                    (
                      Priority == 0
                        ?
                        (
                          <svg fill="#4caf50" width="16px" height="16px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6,30H4V2H28l-5.8,9L28,20H6Z" />
                            <rect id="_Transparent_Rectangle_" style={{ "fill": "none" }} className="cls-1" width="32" height="32" />
                          </svg>
                        )
                        :
                        Priority == 1
                          ?
                          (
                            <svg fill="#ffc107" width="16px" height="16px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6,30H4V2H28l-5.8,9L28,20H6Z" />
                              <rect id="_Transparent_Rectangle_" style={{ "fill": "none" }} className="cls-1" width="32" height="32" />
                            </svg>
                          )
                          :
                          (
                            <svg fill="#c13227" width="16px" height="16px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6,30H4V2H28l-5.8,9L28,20H6Z" />
                              <rect id="_Transparent_Rectangle_" style={{ "fill": "none" }} className="cls-1" width="32" height="32" />
                            </svg>
                          )
                    )
                  }
                </div>
              )
            :
            null
        }

      </div>



    </div>
  )
}

export default Task;
