import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import IndexLayout from './layouts/IndexLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<IndexLayout/>}/>
      </Routes>
    </>
  );
}

export default App;
