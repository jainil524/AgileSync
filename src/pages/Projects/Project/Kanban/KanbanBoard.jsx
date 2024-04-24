import React, { useState, useEffect } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Task from "../../../../components/Kanban/Task/Task"
import Status from "../../../../components/Kanban/Status/Status"
import Popup from '../../../../components/Popup/Popup';

import './css/KanbanBoard.css'

import SkeletonBoard from './SkeletonBoard/SkeletonBoard';
import TaskPopup from './TaskPopup/TaskPopup';



function KanbanBoard() {

  const [tasks, setTasks] = useState(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [openedTask, setOpenedTask] = useState(null);

  const kanbandata = {
    "status": [
      {
        id: 1,
        title: "TODO"
      },
      {
        id: 2,
        title: "IN PROGRESS"
      },
      {
        id: 3,
        title: "DONE"
      },
      {
        id: 4,
        title: "DEPLOYED"
      }
    ],
    "tasks": {
      "TODO": [
        {
          "id": 1,
          "title": "Task 1"
        },
        {
          "id": 2,
          "title": "Task 2"
        },
        {
          "id": 3,
          "title": "Task 3"
        }
      ],
      "IN PROGRESS": [
        {
          "id": 4,
          "title": "Task 4"
        },
        {
          "id": 5,
          "title": "Task 5"
        },
        {
          "id": 6,
          "title": "Task 6"
        }
      ],
      "DONE": [
        {
          "id": 7,
          "title": "Task 7",
          "tags": [
            {
              "id": 1,
              "title":"tag1",
              "color":"#FF0000"
            }, 
            {
              "id": 2,
              "title":"tag2",
              "color":"#FF0AB0"
            },
            {
              "id": 3,
              "title":"tag3",
              "color":"#FA6300"
            },
          ],
          "description": "This is a description",
          "EndDate": "2021-10-10",
          "Assigness": [
            {
              "id":1,
              "name":"Jainil Prajapati",
              "profile_url":"https://randomuser.me/api/portraits"
            },{
              "id":2,
              "name":"Dev Sapariya",
              "profile_url":null
            }
          ],
          "TotalSubTasks": 5,
          "CompletedSubTask": 3,
          "Progress": 50,
          "Priority": 1
        },
        {
          "id": 8,
          "title": "Task 8"
        },
        {
          "id": 9,
          "title": "Task 9"
        }
      ],
      "DEPLOYED": [
        {
          "id": 10,
          "title": "Task 7",
          "tags": [
            {
              "id": 11,
              "title":"tag1",
              "color":"#FF0000"
            }, 
            {
              "id": 12,
              "title":"tag2",
              "color":"#FF0AB0"
            },
            {
              "id": 13,
              "title":"tag3",
              "color":"#FA6300"
            },
          ],
          "description": "This is a description",
          "EndDate": "2021-10-10",
          "Assigness": [
            {
              "id":1,
              "name":"Jainil Prajapati",
              "profile_url":"https://randomuser.me/api/portraits"
            },{
              "id":2,
              "name":"Dev Sapariya",
              "profile_url":null
            }
          ],
          "TotalSubTasks": 5,
          "CompletedSubTask": 3
        },
        {
          "id": 8,
          "title": "Task 8"
        },
        {
          "id": 9,
          "title": "Task 9"
        }
      ]
    }
  };

  // to make the tasks stay in the position after dragged and placed in the new position
  const updateTasks = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    console.log(result, source, destination);

    const sourceStatus = source.droppableId.split("-")[1];
    const destinationStatus = destination.droppableId.split("-")[1];
    const task = tasks[sourceStatus].splice(source.index, 1);
    tasks[destinationStatus].splice(destination.index, 0, task[0]);
    setTasks({ ...tasks });
  }

  // to simulate the loading of the tasks and set the tasks after 800ms and then display the tasks
  useEffect(() => {
    setTimeout(() => {
      setTasks(kanbandata["tasks"]);
    }, 800);
  }, []);

  if (tasks != null) {
    return (
      <>
        <div className='board-wrapper'>
          <div className='board-header'>
            <button>Create Task</button>
          </div>
          <div className='board-body'>

            <DragDropContext onDragEnd={updateTasks}>
              {kanbandata["status"].map((status, ind) => (
                <Droppable
                  key={status.id}
                  type="COLUMN"
                  ignoreContainerClipping={true}
                  droppableId={`Status-${status.title}-${status.id}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Status isDraggingOver={snapshot.isDraggingOver} title={status.title}>
                        {tasks[status.title].map((task, index) => (
                          <Draggable
                            key={task.id}
                            type="ROW"
                            draggableId={"Task-" + task.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                onDoubleClick={() => {setIsPopupOpened(true); setOpenedTask(task)}}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}                              >
                                <Task isDragging={snapshot.isDragging} task={task} />
                              </div>  
                            )}
                          </Draggable>
                        ))}
                      </Status>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>

          </div>
        </div>

        {isPopupOpened && <Popup closePopup={setIsPopupOpened}> <TaskPopup task={openedTask} /> </Popup>}
      </>
    )
  } else {
    return <SkeletonBoard />
  }
}

export default KanbanBoard