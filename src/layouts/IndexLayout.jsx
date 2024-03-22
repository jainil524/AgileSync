import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Navbar/Header';


function IndexLayout() {
  const navigate = useNavigate();

  if (localStorage.getItem('user') == null || localStorage.getItem('user') == '') {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default IndexLayout
