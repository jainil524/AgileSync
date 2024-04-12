import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

import "./css/Error404.css"

function Error404() {
  return (
    <>
        <div className="theme">
            <Link to="/app/dashboard"><button>Go Back To Home</button></Link>
        </div>
    </>
  )
}

export default Error404
