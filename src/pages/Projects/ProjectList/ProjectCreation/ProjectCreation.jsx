import React from "react"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import "./css/ProjectCreation.css"

function ProjectCreation() {

    const managerOptions = ['Chintan Bhatt', 'Payal Chodhry', 'Shilpa Pandey', 'Ankush Raje'];
    const teamOptions = ['Team-Mate2', 'Team-Mate3', 'Team-Mate4']; // Example options for team mates

    const [managerValue, setManagerValue] = React.useState('Project Manager');
    const [managerInputValue, setManagerInputValue] = React.useState('');

    const [teamValue, setTeamValue] = React.useState('Team-Mates');
    const [teamInputValue, setTeamInputValue] = React.useState('');

    return (
        <div className="Project_Data">
            <form className="Project_Data">
                <div className="LeftSide">
                    <div className="form-group">
                        <label htmlFor="project-title">Project Title:</label>
                        <input type="text" id="project-title" name="project-title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="project-description">Project Description:</label>
                        <textarea id="project-description" name="project-description" rows="4" className="scrollable" required></textarea>
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
                        <Autocomplete
                            value={managerValue}
                            onChange={(event, newValue) => {
                                setManagerValue(newValue);
                            }}
                            inputValue={managerInputValue}
                            onInputChange={(event, newInputValue) => {
                                setManagerInputValue(newInputValue);
                            }}
                            options={managerOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </div>

                    <div className="form-group">
                        <label>Start Date:</label>
                        <input type="date" name="start" id="" />
                    </div>

                    <div className="form-group">
                        <label>End Date:</label>
                        <input type="date" name="ebd" id="" />

                    </div>

                    <div className="form-group">
                        <label>Team Mates</label>
                        <Autocomplete
                            value={teamValue}
                            onChange={(event, newValue) => {
                                setTeamValue(newValue);
                            }}
                            inputValue={teamInputValue}
                            onInputChange={(event, newInputValue) => {
                                setTeamInputValue(newInputValue);
                            }}
                            options={teamOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </div>
                    <div class="form-group">
                        <label for="requirements">Upload File:</label>
                        <input type="file" id="requirements" name="requirements" />
                    </div>
                    <div class="SubmitButton">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectCreation;