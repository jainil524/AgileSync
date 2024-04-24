import React, { useState, useMemo,useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { useCookies } from 'react-cookie';
import "./css/Profile.css";
import Button from '../../components/UI/Button/Button';
import logo from '../../../public/img/anime.jpg';


function Profile() {
  const { logout } = useContext(UserContext);
  const cookies   = useCookies()
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({}); 
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('Designation');
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    fetch('https://backend.agilesync.co/all-userdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": cookies[0]["token"],
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    fetch("https://backend.agilesync.co/get-skills", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: JSON.parse(localStorage.getItem("user")).email 
      })
    })
      .then(response => response.json())
      .then(data => {
        setSkills(data.skills);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);
  
  const handleLogout = (e) => {
    logout();
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    setEditMode(false);
    // Perform any additional save operations here
  };

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');

      fetch("https://backend.agilesync.co/update-skills", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": cookies[0]["token"],
        },
        
        body: JSON.stringify({ skills }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error updating skills:', error);
        });
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // Memoize the getSkillColor function
  const getSkillColor = useMemo(() => {
    const colors = ['#FFADAD', '#FFD6A5', '#A0CED9', '#66a266', '#E26D5C', '#746AB0']; // Available colors excluding white
    const colorMap = {};
    skills.forEach(skill => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      colorMap[skill] = colors[randomIndex];
    });
    return colorMap;
  }, [skills]); // Depend on skills array


  return (
    <div className='mainContainer'>
      <div className="themeimg">
        <img src="../../public/img/COVER_IMG1.webp" alt="" />
      </div>
      <div className="profile-page">
        <div className="left-section">
          <img className="avatar" src={user.profile_picture != null && user.profile_picture != "" ? user.profile_picture :logo } alt="avatar" />
          <div className="user-info">
        <button onClick={handleLogout}>Logout</button>
            <h1>{user.name}</h1>
            <p><a href={`mailto: ${user.email}`}>{user.email}</a></p>
          </div>
        </div>
        <div className="right-section">
          {editMode ? (
            <button className="save-button" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-button" onClick={toggleEditMode}>Edit</button>
          )}
          <h2>Your info</h2>
          <form>
            <b><span>Name</span></b>
            <input type="text" placeholder="Name" disabled={!editMode} value={user.name} onChange={(e) => setName(e.target.value)} />
            <b><span>Email Address</span></b>
            <input type="email" placeholder="Email address" disabled={!editMode} value={user.email} onChange={(e) => setEmail(e.target.value)} />
            <b><span>Skills</span></b>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {skills.map((skill, skillIndex) => (
                <div className="skill-bubble" key={skillIndex} style={{ backgroundColor: getSkillColor[skill] }}>
                  {skill}
                  {editMode && (
                    <button className="remove-skill-button" onClick={() => handleRemoveSkill(skill)}>
                      X
                    </button>
                  )}
                </div>
              ))}
              {editMode && (
                <div>
                  <input
                    type="text"
                    placeholder="Add new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddSkill();
                      }
                    }}
                  />
                  <button type='button' className="add-skill-button" onClick={handleAddSkill}>Add</button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
