import React, { useState, useEffect } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useCookies } from 'react-cookie';

import Task from "../../../../components/Kanban/Task/Task"
import Status from "../../../../components/Kanban/Status/Status"
import Popup from '../../../../components/Popup/Popup';
import Button from '../../../../components/UI/Button/Button';

import './css/KanbanBoard.css'

import SkeletonBoard from './SkeletonBoard/SkeletonBoard';
import TaskPopup from './TaskPopup/TaskPopup';



function KanbanBoard() {
  const [cookie, setCookie] = useCookies();
  const [tasks, setTasks] = useState(null);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [openedTask, setOpenedTask] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoaW50YW5AZ21haWwuY29tIiwiZXhwIjoxNzEzOTUzNTUxfQ.WmTwWQy1UOZaZH1KuAfQNG8HvtdHpAhONrtRe9XPHPE",
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify({
        "project_id": "5291492"
      });

      let response = await fetch("https://backend.agilesync.co/get-project", {
        method: "GET",
        body: bodyContent,
        headers: headersList
      });

      let data = await response.json();
      console.log(data);
    }

    fetchData();
  }, []);

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

  if (tasks != null) {
    return (
      <>
        <div className='board-wrapper'>
          <div className='board-header'>
            <Button title="Create Task" />
          </div>
          <div className='board-body'>

            <DragDropContext onDragEnd={updateTasks}>
              {tasks && tasks["status"].map((status, ind) => (
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
                                onDoubleClick={() => { setIsPopupOpened(true); setOpenedTask(task) }}
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
