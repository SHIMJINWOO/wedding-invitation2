// ✅ src/components/Cover.js
import React from 'react';
import './Cover.css';
import mainCover from '../assets/main.jpg';

const Cover = () => {
  return (
    <div className="cover-wrapper">
      <div className="cover-grid">
        <div className="grid-cell">
          <img src={mainCover} alt="cover" className="grid-img" />
            </div>
          </div>
        </div>
  );
};

export default Cover;
