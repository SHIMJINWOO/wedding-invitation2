// ✅ src/components/Cover.js
import React, { useEffect, useState } from 'react';
import './Cover.css';
import mainCover from '../assets/mainCover_Color.png';

const Cover = ({ showMain }) => {
  const topText = "We're getting\nmarried!";
  const bottomText = "진우 & 혜진\n2025.11.16.Sun";

  const [topDisplayed, setTopDisplayed] = useState('');
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTopDisplayed(topText.slice(0, i + 1));
      i++;
      if (i === topText.length) {
        clearInterval(typing);
        // 하단 텍스트 1초 후 표시
        setTimeout(() => setShowBottom(true), 1000);
      }
    }, 120);
    return () => clearInterval(typing);
  }, []);


  return (
    <div className={`cover-wrapper ${showMain ? 'scrolled' : 'intro'}`}>
      <div className="cover-grid fade-in">
        <div className="grid-cell">
          <img src={mainCover} alt="cover" className="grid-img" />
        </div>
      </div>
  
      <div className="cover-overlay">
        <div className="cover-text-container">
          <p className="typing-text handwriting-font">
            {topDisplayed.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
  
          {showBottom && (
            <p className="bottom-text fade-in-bottom">
              {bottomText.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );  
}

export default Cover;
