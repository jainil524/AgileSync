import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

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
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setDocLoading(false);
        }, 1300);
      }
    };

    // Add event listener for readystatechange
    document.addEventListener('readystatechange', handleLoading);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('readystatechange', handleLoading);
    };
  }, []);

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
