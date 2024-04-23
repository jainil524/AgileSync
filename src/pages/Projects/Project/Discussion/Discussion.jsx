import React, { useEffect, useState } from 'react';
import Button from '../../../../components/UI/Button/Button';
import './Discussion.css';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function DocumentUpload() {

    const [Cookie, setCookie] = useCookies();
    const [file, setFile] = useState(null);
    const [projectId, setProjectId] = useState('');
    useEffect(() => {
        
        let project_id = window.location.pathname.split('/')[3];
        setProjectId(project_id+"");
        
    },[]);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };  

    const handleUpload = async (e) => {
        console.log(document.querySelector("input[type='file']").files[0]);
        let formdata = new FormData();
        formdata.append('file', document.querySelector("input[type='file']").files[0]);
        formdata.append('project_id', projectId);

        await fetch('https://7825-2409-40c1-3-a9dc-9c21-8f07-dced-9cd7.ngrok-free.app/upload', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': Cookie.token
            },
            body: formdata
        })
        .then(response => response.json())
        .then(data => {
            alert("uploaded scuccessfully now you can create chatbot")

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const handleCreateChatbot = () => {
        let project_id = window.location.pathname.split('/')[3];
        
        console.log('Creating chatbot with document:', file);
        Navigate(`http://chat.agilesync.co/?id=${project_id}`)
    };

    return (
        <div className="document-upload-container">
            <h1>Create Your Personalized Chatbot</h1>
            <p>Specific to Your Project</p>
            <p>To improve its strength, upload your requirement document.</p>
            <form action='https://7825-2409-40c1-3-a9dc-9c21-8f07-dced-9cd7.ngrok-free.app/upload' method='POST' encType="multipart/form-data">  
            <input
                type="file"
                name='document'
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
            />
            <input type="hidden" name="project_id" value={projectId}/>
            <button onClick={handleUpload} type="submit">Add Document</button>
            </form>
            {file && <p>Selected File: {file.name}</p>}
            <button><a  style={{"color":"white"}} href={`http://chat.agilesync.co/?id=${projectId}`} target="_blank" rel="noreferrer" >Create ChatBot</a></button>
        </div>
    );
}

export default DocumentUpload;
