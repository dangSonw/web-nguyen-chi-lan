import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Music from './pages/Music';
import Photography from './pages/Photography';
import Flowers from './pages/photography/Flowers';
import Portrait from './pages/photography/Portrait';
import StreetPhotography from './pages/photography/StreetPhotography';
import Filmmaking from './pages/Filmmaking';
import DancePerformance from './pages/DancePerformance';
import Art from './pages/Art';
import Community from './pages/Community';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}



export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // "Reload hoặc mở trang luôn quay về khởi động ở Home"
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';
    const isFreshDirect = !sessionStorage.getItem('spa_session_started');

    if (isReload || (isFreshDirect && location.pathname !== '/')) {
      navigate('/', { replace: true });
    }
    sessionStorage.setItem('spa_session_started', 'true');
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/music"
          element={
            <PageTransition>
              <Music />
            </PageTransition>
          }
        />
        <Route
          path="/photography"
          element={
            <PageTransition>
              <Photography />
            </PageTransition>
          }
        />
        <Route
          path="/photography/flowers"
          element={
            <PageTransition>
              <Flowers />
            </PageTransition>
          }
        />
        <Route
          path="/photography/portrait"
          element={
            <PageTransition>
              <Portrait />
            </PageTransition>
          }
        />
        <Route
          path="/photography/street-photography"
          element={
            <PageTransition>
              <StreetPhotography />
            </PageTransition>
          }
        />
        <Route
          path="/filmmaking"
          element={
            <PageTransition>
              <Filmmaking />
            </PageTransition>
          }
        />
        <Route
          path="/dance-performance"
          element={
            <PageTransition>
              <DancePerformance />
            </PageTransition>
          }
        />
        <Route
          path="/art"
          element={
            <PageTransition>
              <Art />
            </PageTransition>
          }
        />
        <Route
          path="/community"
          element={
            <PageTransition>
              <Community />
            </PageTransition>
          }
        />
        {/* Fallback to Home */}
        <Route
          path="*"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
