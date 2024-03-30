import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';

import "./css/Profile.css";

function Profile() {
  const {logout} = useContext(UserContext);
  return (
    <div className='mainContainer'>
      <div className="themeimg">
        <img src="../../src/assets/img/COVER_IMG1.webp" alt="" />
      </div>
      <div className="profile-wrapper">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      {/* <button onClick={()=>{
        logout();
      }}>
        LogOut
      </button> */}
    </div>
  )
}

export default Profile
