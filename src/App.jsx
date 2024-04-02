import React, { useContext } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import LoginDesign from './pages/LandingPage/LoginDesign';
import IndexRoutes from './routes/IndexRoutes';
import RegisterDesign from './pages/LandingPage/RegisterDesign';
import Landing from './pages/LandingPage/LandingPages';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginDesign />} />
        <Route path="/register" element={<RegisterDesign />} />
        <Route path="/app/*" element={<IndexRoutes />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>


    </>
  );
}

export default App;
