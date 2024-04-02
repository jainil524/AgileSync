import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import UserContextProvider from './contexts/UserContext.jsx';
import "./assets/css/Common.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </BrowserRouter>
)
