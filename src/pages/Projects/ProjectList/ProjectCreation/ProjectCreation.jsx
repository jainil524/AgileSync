import React from "react"

import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Form from "../../../../components/Form/Form";

import "./css/ProjectCreation.css"
import { Avatar } from "@mui/material";

function ProjectCreation() {

    const managerOptions = [{profilePic:null,name: 'Chintan Bhatt'}, {profilePic:null,name: 'Payal Chodhry'}, {profilePic:null,name: 'Shilpa Pandey'}, {profilePic:null,name: 'Ankush Raje'}];
    const teamOptions = ['Team-Mate2', 'Team-Mate3', 'Team-Mate4'];

    const [managerValue, setManagerValue] = React.useState([]);
    const [managerInputValue, setManagerInputValue] = React.useState('');

    const [teamValue, setTeamValue] = React.useState([]);
    const [teamInputValue, setTeamInputValue] = React.useState('');

    const handleCreateProject = (e) => {
        e.preventDefault();

        // fetch("")
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
                            {/* <Autocomplete
                                getOptionLabel={(option) => option.label}
                                options={managerOptions}
                                sx={{ width: 300 }}
                                renderInput={(params,option) => <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...params}>
                                    <Avatar src={option.profilePic} alt={option.name}/>
                                    <div>{option} | {props}</div>
                                    {option.name}
                                </Box>}
                            /> */}
                        </div>
                        <div className="dateWrapper">
                            <div className="form-group">
                                <label>Start Date:</label>
                                <input type="date" name="start_date" id="" />
                            </div>

                            <div className="form-group">
                                <label>End Date:</label>
                                <input type="date" name="end_date" id="" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Team Mates</label>
                            <Autocomplete
                                value={teamValue}
                                multiple={true}
                                onChange={(event, newValue) => {
                                    setTeamValue(newValue);
                                }}
                                inputValue={teamInputValue}
                                onInputChange={(event, newInputValue) => {
                                    setTeamInputValue(newInputValue);
                                }}
                                options={teamOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <div>{...parmas}</div>
                                </Box>}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="requirements">Upload File:</label>
                            <input type="file" id="requirements" name="requirements" />
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