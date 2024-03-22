import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import IndexRoutes from './routes/IndexRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/app" replace={true} />}/>
        <Route path="/app/*" element={<IndexRoutes/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
