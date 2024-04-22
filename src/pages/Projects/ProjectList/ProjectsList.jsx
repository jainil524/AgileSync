import React, { useEffect } from "react";
import { Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"

import { toMMsDD, toDDbsMMbsYY } from "../../../utils/changeDateFormat";
import Button from "../../../components/UI/Button/Button"

import "./css/ProjectList.css";


function ProjectsList() {
  const cookies = useCookies()
  const [projectList, setProjectList] = React.useState([]);
  const [ isLoading, setIsLoading] = React.useState(false);
  // const rows = [
  //   {
  //     id: 1,
  //     projectName: "Project 1",
  //     status: "In Progress",
  //     completed: "60%",
  //     nextMilestone: "Design",
  //     startDate: "01/01/2021",
  //     endDate: "01/01/2022",
  //     teammates: [
  //       {
  //         userid: 1,
  //         name: "John Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       },
  //       {
  //         userid: 2,
  //         name: "Jane Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     projectName: "Project 2",
  //     status: "Completed",
  //     completed: "100%",
  //     nextMilestone: "N/A",
  //     startDate: "01/06/2021",
  //     endDate: "01/12/2022",
  //     teammates: [
  //       {
  //         userid: 4,
  //         name: "John Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       },
  //       {
  //         userid: 3,
  //         name: "Jane Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     projectName: "Project 3",
  //     status: "In Progress",
  //     completed: "40%",
  //     nextMilestone: "Development",
  //     startDate: "01/01/2021",
  //     endDate: "01/01/2022",
  //     teammates: [
  //       {
  //         userid: 5,
  //         name: "John Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       },
  //       {
  //         userid: 6,
  //         name: "Jane Doe",
  //         avatar: "https://randomuser.me/api/portraits"
  //       }
  //     ]
  //   }];

  useEffect(() => {
    setIsLoading(true);
    fetch("https://backend.agilesync.co/get-project-by-owner", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": cookies[0]["token"]
      },
    }).then((response) => {
      // Return the parsed JSON data here
      return response.json();
    }).then((data) => {
      // Update the projectList state properly
      setProjectList(data);
      setIsLoading(false);
    }).catch((error) => {
      // Handle any errors
      console.error("Error fetching project data:", error);
      setIsLoading(false);
    });
  }, []);

  return <>
    <div className="project-container">
      <div className="project-header">
        <Link to="/app/createproject"><Button title="Create Project" /></Link>
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
            {
              isLoading == false && projectList > 0
                ?
                  (
                    projectList.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td className="projectlink"><Link style={{ "color": "black", textDecoration: "none" }} to={`/app/project/${row.id}/dashboard`}>{row.projectName}</Link></td>
                        <td>{row.status}</td>
                        <td>{row.completed}</td>
                        <td>{row.nextMilestone}</td>
                        <td><span title={toDDbsMMbsYY(row.startDate)}>{toMMsDD(row.startDate)}</span> - <span title={toDDbsMMbsYY(row.endDate)}>{toMMsDD(row.endDate)}</span></td>
                        <td>
                          <AvatarGroup max={4}>
                            {
                              row.teammates.map((teammate, index) => (
                                <Avatar style={{ "width": "30px", "height": "30px" }} key={index} alt={teammate.name} src={teammate.avatar} />
                              ))
                            }
                          </AvatarGroup>
                        </td>
                      </tr>
                  )))
                : (isLoading == false && projectList.length == 0) ? 
                  (
                    <tr style={{"width":"100%","textAlign": "center"}}>
                      <td colSpan={7}>
                        <h1>
                          No Data Found
                        </h1>
                      </td>
                    </tr>
                  ) : (
                    <tr style={{"width":"100%","textAlign": "center"}}>
                      <td colSpan={7}>
                        <h1>
                          Loaning
                        </h1>
                      </td>
                    </tr>
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  </>;
}

export default ProjectsList;