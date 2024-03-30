import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

import "./css/ProjectList.css";

function ProjectsList() {

  const rows = [
    {
      id: 1,
      projectName: "Project 1",
      status: "In Progress",
      completed: "60%",
      nextMilestone: "Design",
      startDate: "01/01/2021",
      endDate: "01/01/2022",
      teammates: [
        {
          userid: 1,
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits"
        },
        {
          userid: 2,
          name: "Jane Doe",
          avatar: "https://randomuser.me/api/portraits"
        }
      ]
    },
    {
      id: 2,
      projectName: "Project 2",
      status: "Completed",
      completed: "100%",
      nextMilestone: "N/A",
      startDate: "01/01/2021",
      endDate: "01/01/2022",
      teammates: [
        {
          userid: 4,
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits"
        },
        {
          userid: 3,
          name: "Jane Doe",
          avatar: "https://randomuser.me/api/portraits"
        }
      ]
    },
    {
      id: 3,
      projectName: "Project 3",
      status: "In Progress",
      completed: "40%",
      nextMilestone: "Development",
      startDate: "01/01/2021",
      endDate: "01/01/2022",
      teammates: [
        {
          userid: 5,
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits"
        },
        {
          userid: 6,
          name: "Jane Doe",
          avatar: "https://randomuser.me/api/portraits"
        }
      ]
    }];

  return <>
    <div className="project-container">
      <div className="project-header">
        
      </div>
      <div className="project-body">
        <table>
          <caption>Project List</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>% Completed</th>
              <th>Next Milestone</th>
              <th>Start - End Date</th>
              <th>Teammates</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.projectName}</td>
                <td>{row.status}</td>
                <td>{row.completed}</td>
                <td>{row.nextMilestone}</td>
                <td>{row.startDate} - {row.endDate}</td>
                <td>
                  <AvatarGroup max={4}>
                    {
                      row.teammates.map((teammate, index) => (
                        <Avatar alt={teammate.name} src={teammate.avatar} />
                      ))
                    }
                  </AvatarGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>;
}

export default ProjectsList;