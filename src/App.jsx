import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import IndexRoutes from './routes/IndexRoutes';
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/app" replace={true} />}/>
        <Route path="/app/*" element={<IndexRoutes/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
