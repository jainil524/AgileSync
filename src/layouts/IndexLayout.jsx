import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Navbar/Header';


function IndexLayout() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default IndexLayout
