// ✅ src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import FamilyIntro from './components/FamilyIntro';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Account from './components/Account';

const Cover = lazy(() => import('./components/Cover'));

function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 5000); // 타이핑 + 사진 등장 이후
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center' }}>로딩 중...</div>}>
        <Cover showMain={showMain} />
      </Suspense>
      {showMain && (
        <>
          <Greeting />
          <FamilyIntro />
          <Location />
          <Gallery />
          <Account />
        </>
      )}
    </div>
  );
}

export default App;
