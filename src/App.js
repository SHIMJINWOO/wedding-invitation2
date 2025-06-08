import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/Cover';
import Greeting from './components/Greeting';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Account from './components/Account';


function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {/* Cover는 항상 렌더링되되, 상태에 따라 스타일만 다르게 */}
      <Cover isIntro={!showMain} />
      {showMain && <Greeting />}
      <Location/>
      <Gallery />
      <Contact />
      <Account />

    </div>
    
  );
}

export default App;
