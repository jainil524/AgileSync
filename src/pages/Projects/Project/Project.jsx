import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './css/ProjectDetail.css'; // Import your custom CSS file for styling

const ProjectDetail = () => {

    const cookies = useCookies();
    const [project, setProject] = React.useState({});

    useEffect(() => {
        let projectid = window.location.pathname.split('/')[3]
        fetch(`https://backend.agilesync.co/get-project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('user')).token
            },
            body: JSON.stringify({
                'project_id': projectid
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((data) => {
            setProject(data);
        }).catch((error) => {
            console.error('Error fetching project data:', error);
        });
    }, []);
    
    

    return (
        <div className="project-detail-container">
            <div className="project-header">
                <h1>{project.title}</h1>
                <p className="project-id">Project ID: {project.project_id}</p>
            </div>
            <div className="project-overview">
                <div className="project-info">
                    <h2>Project Overview</h2>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Purpose:</strong> {project.purpose}</p>
                </div>
                <div className="project-dates">
                    <h2>Project Dates</h2>
                    <p><strong>Start Date:</strong> {project.start_date}</p>
                    <p><strong>End Date:</strong> {project.end_date}</p>
                </div>
            </div>
            <div className="project-details">
                <div className="project-section">
                    <h2>Mentor</h2>
                    <p>{project.mentor}</p>
                </div>
                <div className="project-section">
                    <h2>Owner</h2>
                    <p>{project.owner}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
