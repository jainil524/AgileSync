import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Navbar/Header';


function IndexLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default IndexLayout
