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
    <div className="task-container-wrapper hidepopup">
      <div className="task-container">
        <div className="task-header">
          <div className="task-action-btn-dnc">
            <button className="close-btn buttonCursor">Save</button>
            <button className="close-btn buttonCursor">Cancel</button>
          </div>
        </div>

        <div className="task-scroller">
          <form className="task-details-body">
            <fieldset className="section status-info">
              <legend>Status & Assignment</legend>
              <div className="input-group long">
                <div>
                  <label htmlFor="taskstatus">Task Status</label>
                  <select name="taskstatus" id="taskstatus"></select>
                </div>
              </div>

            </fieldset>

            <fieldset className="section general-info">
              <legend>General Info</legend>
              <div className="input-group long">
                <div>
                  <label className="mandatoryField" htmlFor="summery">Title</label>
                  <input type="text" name="tasksummary" id="summery" />
                </div>
                <div className="mark-done-con">
                  <input type="checkbox" name="isdone" value="false" id="markasdone" onClick={() => this.value=this.checked} />
                    <label htmlFor="markasdone">Mark Done</label>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="description">Description</label>
                <div id="editor"></div>
                <textarea name="taskdescription" style="display:none;" id="description" cols="30" rows="5"></textarea>
              </div>
            </fieldset>

            <fieldset className="section details-info">
              <legend>Details & Dates</legend>
              <div className="input-group long">
                <div>
                  <label htmlFor="startdate">Start Date</label>
                  <input type="date" name="taskstartdate" id="startdate"/>
                </div>
                <div>
                  <label htmlFor="enddate">End Date</label>
                  <input type="date" name="taskenddate" id="enddate" />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="progress">Progress</label>
                <div className="range-holder">
                  <input type="range" id="progress" value="0" min="0" max="100" name="taskprogress" onInput={()=> document.querySelector('#rangeVal').innerText = this.value+'%'} />
                    <p id="rangeVal">0%</p>
                </div>
              </div>
              <div className="input-group long">
                <div>
                  <label htmlFor="priority">Priority</label>
                  <select name="taskpriority" id="priority"></select>
                </div>
              </div>
            </fieldset>

            <fieldset className="section assignee-info">
              <legend>Assigned & Reporting</legend>
              <div className="input-group">
                <label htmlFor="assignee">Assignee</label>
                <div id="assignee" tabIndex="0"></div>
              </div>
              <div className="input-group">
                <label className="mandatoryField" htmlFor="reporter">Reporter</label>
                <div id="reporter" tabIndex="0"></div>
              </div>
            </fieldset>

            <fieldset className="section tags-info">
              <legend>Tags</legend>
              <div className="tags-container">
                <div className="tagsList"></div>
                <input type="text" className="tagInput" placeholder="Add Tag (i.e. tag1 OR tag1,tag2,tag3)" />
              </div>
            </fieldset>
            <fieldset className="section subtask-info">
              <legend>Subtasks</legend>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
              </div>
            </fieldset>

            {/* <fieldset className="section attachments-info">
              <legend>Attachments</legend>
              <div className="attachment-con">
                <label htmlFor="attachments">
                  <div className="uploading-icon">
                    <img src="asset/img/upload_icon.svg" alt="Upload Icon">
                  </div>
                  <span>Attach Your Documents</span>
                </label>
                <input type="file" name="attachments[]" id="attachments" multiple onchange="LoadFileIntoContainer(event)" accept="image/jpeg,image/png,image/webp,image/jpg,.doc,.docx,.xls,.txt,.pdf" />
                  <div className="attached-file-con" style="display:none"></div>
              </div>
            </fieldset> */}

          </form>
        </div>
      </div>
      <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    </div>
  );
};

export default TaskPopup;