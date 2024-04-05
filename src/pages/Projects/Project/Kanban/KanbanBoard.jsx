import React, { useState, useEffect } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Task from "../../../../components/Kanban/Task/Task"
import Status from "../../../../components/Kanban/Status/Status"
import LoadingPage from '../../../LoadingPage/LoadingPage';
import './css/KanbanBoard.css'
import SkeletonBoard from './SkeletonBoard/SkeletonBoard';



function KanbanBoard() {

  const [tasks, setTasks] = useState(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

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
          "title": "Task 7"
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
                                onDoubleClick={() => setIsPopupOpened(true)}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}                              >
                                <Task isDragging={snapshot.isDragging} title={task.title} />
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

        {isPopupOpened && <div className='popup-wrapper'>  <button onClick={() => setIsPopupOpened(false)}>close</button> i am popup </div>}
      </>
    )
  } else {
    return <SkeletonBoard />
  }
}

export default KanbanBoard
