import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';

function Profile() {
  const {user} = useContext(UserContext);
  return (
    <div>
      Profile
      <h1>Name: {user.name}</h1>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default Profile
