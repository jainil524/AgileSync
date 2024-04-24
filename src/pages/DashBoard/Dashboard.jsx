import React, { useContext } from 'react';
import './css/Dashboard.css';

import { useCookies } from 'react-cookie';
import { UserContext } from '../../contexts/UserContext';
import { toDDsMM } from '../../utils/changeDateFormat';

function Dashboard() {
    const {user} = useContext(UserContext);
    const [cookie, setCookie] = useCookies();
    const [assignedtasks, setassignedtasks] = React.useState([]);
    const [assignedprojects, setassignedprojects] = React.useState([]);

    React.useEffect(() => {
        fetchProject();
        fetchTasks();
        console.log(cookie, user);
    }, []);

    const fetchProject = async () => {
        let response = await fetch("https://backend.agilesync.co/get-project-by-participant", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookie.token
            }
        });

        let data = await response.json();
        console.log(data);
        setassignedprojects(data);
    }

    const fetchTasks = async () => {
        let response = await fetch("https://backend.agilesync.co/get-task-by-assignee", {
            method: "POST",
            body: JSON.stringify({
                "assignee": JSON.parse(localStorage.getItem("user")).email
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": cookie.token
            }
        });

        let data = await response.json();
        console.log(data);
        setassignedtasks(data);
    }

    return (
        <div className="dashboard-container">
            <div className="left-card">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Assign Projects</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Team Size</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (assignedprojects.length > 0) ? assignedprojects.map((project, index) => {
                                        return (<tr key={index}>
                                            <td>{project.index}</td>
                                            <td>{project.title}</td>
                                            <td>{project.team.length}</td>
                                            <td>{project.start_date}</td>
                                            <td>{project.end_date}</td>
                                        </tr>
                                        )
                                    }): <tr><td colSpan="5" style={{textAgile:"center"}}>No Projects Assigned</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="right-card">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Assigned Tasks</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                    (assignedtasks.length > 0) ? assignedtasks.map((task, index) => {
                                        return (<tr key={index}>
                                            <td>{task.id}</td>
                                            <td>{task.title}</td>
                                            <td>{task.task}</td>
                                            <td>{task.priority}</td>
                                            <td>{toDDsMM(task.start_date)}</td>
                                            <td>{toDDsMM(task.end_date)}</td>
                                        </tr>
                                        )
                                    }): <tr><td colSpan="6" style={{textAgile:"center"}}>No Tasks Assigned</td></tr>
                                
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
