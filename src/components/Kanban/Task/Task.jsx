import React from 'react'

import "../css/TaskCard.css";
import { Avatar, AvatarGroup } from '@mui/material';
import {FaCalendar} from 'react-icons/fa';

function Task({title}) {
  return (
    <div className='task'>
      <div className="tag-container">
        <span className='tag'>Urgent</span>
        <span className='tag'>Important</span>
        <span className='tag'>Good</span>
      </div>
      <div className="title">{title}</div>
      <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure veritatis, enim laudantium dolores eos accusamus eum ipsum! Unde ea dolore, velit obcaecati, nisi atque veniam enim sunt numquam sit facere maiores non eos suscipit exercitationem error ad, id illo cupiditate sint! Ab error cupiditate aspernatur quidem maiores voluptatum beatae consectetur rem, optio, minus odio non aperiam hic cumque vitae sed quasi, qui amet ipsum tempore. Quidem, dolor laboriosam unde delectus repudiandae nobis debitis, ipsum eligendi reprehenderit libero sunt a consectetur. Esse quo unde distinctio architecto inventore! Est provident repellendus corrupti eum iusto, ipsam incidunt adipisci cupiditate harum necessitatibus, quod explicabo.</div>
      <div className="task-info">
        <span className="enddate" title="02 Jul, 2024"><FaCalendar color='#777' size={16} /> 02 Jul</span>
        <span className="subtask-estimation">
        <img src="../../../src/assets/img/diagram-subtask.svg" /><span className="subtask-estimation__value">00/03</span>
        </span>
      </div>
      <div className="assignee">
        <AvatarGroup max={3}>
          <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        </AvatarGroup>
      </div>
    </div>
  )
}

export default Task
