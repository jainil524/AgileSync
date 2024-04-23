import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginDesign from './pages/LandingPage/LoginDesign';
import IndexRoutes from './routes/IndexRoutes';
import RegisterDesign from './pages/LandingPage/RegisterDesign';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import Landing from './pages/LandingPage/LandingPages';
import Error404 from './pages/Error/Error404';

function App() {
  const [docLoading, setDocLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
        setTimeout(() => {
          setDocLoading(false);
        }, 1300);
    };

    // Set the listener for the window load event
    window.addEventListener('load', handleLoading);

    // Cleanup the listener
    return () => {
      window.removeEventListener('load', handleLoading);
    };
  }, [document.readyState]); // Empty dependency array ensures this runs only once on mount.

  if (docLoading) {
    return <LoadingPage />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginDesign />} />
        <Route path="/register" element={<RegisterDesign />} />
        <Route path="/app/*" element={<IndexRoutes />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  }
}

export default App;
