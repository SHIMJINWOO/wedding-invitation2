import React, { Suspense, lazy } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import FamilyIntro from './components/FamilyIntro';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Account from './components/Account';

const Cover = lazy(() => import('./components/Cover'));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center' }}>로딩 중...</div>}>
        <Cover />
      </Suspense>
      <Greeting />
      <FamilyIntro />
      <Location />
      <Gallery />
      <Account />
    </div>
  );
}

export default App;
