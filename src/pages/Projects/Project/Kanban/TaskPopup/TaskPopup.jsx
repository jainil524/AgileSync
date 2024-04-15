import React, { useState } from 'react';

import "./css/TaskPopup.css";

const TaskPopup = ({ task, onTaskUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [duration, setDuration] = useState(task.duration);
  const [description, setDescription] = useState(task.description);
  const [assignees, setAssignees] = useState(task.assignees);
  const [subtasks, setSubtasks] = useState(task.subtasks);
  const [comments, setComments] = useState(task.comments);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignees(event.target.value);
  };

  const handleSubtaskChange = (event) => {
    setSubtasks(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComments(event.target.value);
  };

  const handleTaskUpdate = () => {
    onTaskUpdate({
      title,
      priority,
      status,
      duration,
      description,
      assignees,
      subtasks,
      comments,
    });
  };

  return (
    <div className="task-popup">
      <div className="section section-1">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select value={status} onChange={handleStatusChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <input
          type="text"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Duration"
        />
      </div>
      <div className="section section-2">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
      </div>
      <div className="section section-3">
        <input
          type="text"
          value={assignees}
          onChange={handleAssigneeChange}
          placeholder="Assignees"
        />
        <input
          type="text"
          value={subtasks}
          onChange={handleSubtaskChange}
          placeholder="Subtasks"
        />
      </div>
      <div className="section section-4">
        <textarea
          value={comments}
          onChange={handleCommentChange}
          placeholder="Comments"
        />
      </div>
      <button onClick={handleTaskUpdate}>Update Task</button>
    </div>
  );
};

export default TaskPopup;