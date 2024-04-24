import React, { useEffect } from "react";
import { Avatar, AvatarGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie"

import { toMMsDD, toDDbsMMbsYY } from "../../../utils/changeDateFormat";
import Button from "../../../components/UI/Button/Button"

import "./css/ProjectList.css";


function ProjectsList() {

  // 
  const cookies = useCookies()
  const [projectList, setProjectList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    console.log(projectList)
  }, [projectList]);


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
  },[]);

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
              <th>Total Tasks</th>
              <th>Start - End Date</th>
              <th>Teammates</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ? (
                <tr style={{ "width": "100%", "textAlign": "center" }}>
                  <td colSpan={7}>
                    <h1>Loading...</h1>
                  </td>
                </tr>
              ) : projectList.length > 0 ? (
                (
                  projectList.map((row, index) => (
                    <tr key={row.project_id}>
                      <td>{index + 1}</td>
                      <td className="projectlink"><Link style={{ "color": "black", textDecoration: "none" }} to={`/app/project/${row.project_id}/projectdetails`}>{row.title}</Link></td>
                      <td>{row.status}</td>
                      <td>{row.tasks.length}</td>
                      <td><span title={row.start_date}>{row.start_date}</span> - <span title={row.end_date}>{row.end_date}</span></td>
                      <td>
                        {
                          row.team.length > 0 ?
                            (<AvatarGroup max={4}>
                              {
                                row.team.map((teammate, index) => (
                                  <Avatar style={{ "width": "30px", "height": "30px" }} key={index} alt={teammate.name} src={teammate.avatar} />
                                ))
                              }
                            </AvatarGroup>
                            )
                            :
                            "-"}
                      </td>
                    </tr>
                  )))
              ) : (
                <tr style={{ "width": "100%", "textAlign": "center" }}>
                  <td colSpan={7}>
                    <h1>No Data Found</h1>
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