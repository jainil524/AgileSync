import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';

import "./css/Profile.css";
import Button from '../../components/UI/Button/Button';

function Profile() {
  const { logout } = useContext(UserContext);

  const handleLogout = (e, setIsLoading)=>{
    console.log("Logout Clicked");
    setIsLoading(true);
    logout().then(()=>{
      setIsLoading(false);
    });
  }

  return (
    <div className='mainContainer'>
      <div className="themeimg">
        <img src="../../public/img/COVER_IMG1.webp" alt="" />
      </div>
      <div className="profile-wrapper">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <Button title="Logout" hasLoading={true} setClick={handleLogout} />
    </div>
  )
} 

export default Profile
