import React from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Header from '../components/Navbar/Header';


function IndexLayout() {
  const navigate = useNavigate();

  if (localStorage.getItem('user') === null || localStorage.getItem('user') === '') {
    navigate('/login');
  }

  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/dashboard" element={<></>} />
          <Route path="/projects" element={<></>} />
          <Route path="/profile" element={<></>} />
        </Routes>

      <Outlet/>
    </>
  )
}

export default IndexLayout
