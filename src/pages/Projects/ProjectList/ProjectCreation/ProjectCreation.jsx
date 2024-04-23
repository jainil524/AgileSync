import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Form from "../../../../components/Form/Form";

import { useCookies } from "react-cookie";
import "./css/ProjectCreation.css"
import { Avatar } from "@mui/material";

function ProjectCreation() {

    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [managerOptions, setManagerOptions] = useState([]);

    useEffect(() => {
        // Fetch manager data
        fetchManagerData();
    }, []);

    const fetchManagerData = () => {
        // Fetch manager data from URL
        fetch('https://backend.agilesync.co/get-all-faculty')
            .then(response => response.json())
            .then(data => {
                setManagerOptions(data);
            })
            .catch(error => {
                console.error('Error fetching manager data:', error);
            });
    };

    const handleCreateProject = (e) => {
        e.preventDefault();
        fetch('https://backend.agilesync.co/create-project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": cookies.token,
            },
            body:
                JSON.stringify({
                    title: document.getElementById('project-title').value,
                    description: document.getElementById('project-description').value,
                    objective: document.getElementById('objective').value,
                    purpose: document.getElementById('purpose').value,
                    scope: document.getElementById('scope').value,
                    start_date: document.getElementsByClassName('startDate')[0].value,
                    end_date: document.getElementsByClassName('endDate')[0].value,
                    mentor: document.getElementById('projectMentor').value,
                }),
        }).then(response => response.json())
            .then(data => {
                // setTeamOptions(data);
                console.log(data);
                if(data.message === "Project created"){
                    alert("Project created successfully")
                    navigate("/app/projectlist")
                }else{
                    alert("Project creation failed!! Please try again...")
                }

            })
            .catch(error => {
                console.error('Error creating project:', error);
            });
    };
    return (
        <>

            <Form>
                <div className="wrapper">
                    <h2>Creation Project</h2>
                </div>
                <div className="wrapper">
                    <div className="LeftSide">
                        <div className="form-group">
                            <label htmlFor="project-title">Project Title:</label>
                            <input type="text" id="project-title" name="title" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="project-description">Project Description:</label>
                            <textarea id="project-description" name="description" rows="4" className="scrollable" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="objective">Objective:</label>
                            <textarea id="objective" name="objective" rows="4" className="scrollable" required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="purpose">Purpose:</label>
                            <textarea id="purpose" name="purpose" rows="4" className="scrollable" required></textarea>
                        </div>
                    </div>

                    <div className="RightSide">
                        <div className="form-group">
                            <label htmlFor="scope">Scope:</label>
                            <input type="text" id="scope" name="scope" required />
                        </div>

                        <div className="projectM">
                            <label>Project Manager</label>
                            <select id="projectMentor" name="mentor">
                                {managerOptions.map((option) => (
                                    <option value={option.email}>{option.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="dateWrapper">
                            <div className="form-group">
                                <label>Start Date:</label>
                                <input className="startDate" type="date" name="start_date" id="" />
                            </div>

                            <div className="form-group">
                                <label>End Date:</label>
                                <input className="endDate" type="date" name="end_date" id="" />
                            </div>
                        </div>
                        <div className="SubmitButton">
                            <button onClick={handleCreateProject}>Create Project</button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default ProjectCreation;