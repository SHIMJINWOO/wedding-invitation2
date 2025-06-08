import React, { useEffect, useState } from 'react';
import './Cover.css';

import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from '../assets/cover3.jpg';
import cover4 from '../assets/cover4.jpg';
import cover5 from '../assets/cover5.jpg';
import cover6 from '../assets/cover6.jpg';
import cover7 from '../assets/cover7.jpg';
import cover8 from '../assets/cover8.jpg';
import cover9 from '../assets/cover9.jpg';
import cover10 from '../assets/cover10.jpg';
import cover11 from '../assets/cover11.jpg';
import cover12 from '../assets/cover12.jpg';
import cover13 from '../assets/cover13.jpg';
import cover14 from '../assets/cover14.jpg';
import cover15 from '../assets/cover15.jpg';
import cover16 from '../assets/cover16.jpg';
import cover17 from '../assets/cover17.jpg';
import cover18 from '../assets/cover18.jpg';
import cover19 from '../assets/cover19.jpg';
import cover20 from '../assets/cover20.jpg';

const images = [
  cover1, cover2, cover3, cover4, cover5,
  cover6, cover7, cover8, cover9, cover10,
  cover11, cover12, cover13, cover14, cover15,
  cover16, cover17, cover18, cover19, cover20,
];

function Cover({ isIntro }) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSub1, setDisplayedSub1] = useState('');
  const [displayedSub2, setDisplayedSub2] = useState('');

  useEffect(() => {
    if (isIntro) {
      const fullTitle = '진우, 혜진';
      const fullSub1 = '결혼합니다';
      const fullSub2 = '2025년 11월 16일 오후 2시';

      let i = 0;
      const typingTitle = setInterval(() => {
        setDisplayedTitle(fullTitle.slice(0, i + 1));
        i++;
        if (i === fullTitle.length) {
          clearInterval(typingTitle);

          let j = 0;
          const typingSub1 = setInterval(() => {
            setDisplayedSub1(fullSub1.slice(0, j + 1));
            j++;
            if (j === fullSub1.length) {
              clearInterval(typingSub1);

              let k = 0;
              const typingSub2 = setInterval(() => {
                setDisplayedSub2(fullSub2.slice(0, k + 1));
                k++;
                if (k === fullSub2.length) clearInterval(typingSub2);
              }, 100);
            }
          }, 100);
        }
      }, 200);

      return () => {
        clearInterval(typingTitle);
      };
    } else {
      setDisplayedTitle('진우, 혜진');
      setDisplayedSub1('결혼합니다');
      setDisplayedSub2('2025년 11월 16일 오후 2시');
    }
  }, [isIntro]);

  return (
    <div className={`cover-wrapper ${isIntro ? 'intro' : 'scrolled'}`}>
      <div className="cover-grid">
        {images.map((img, index) => (
          <div key={index} className="grid-cell">
            <img src={img} alt={`cover${index + 1}`} className="grid-img" />
          </div>
        ))}
      </div>
      <div className="cover-overlay">
        <div className="cover-text">
          <h1 className="typing-text korean-font">{displayedTitle}</h1>
          <p className="typing-text english-font sub-text">{displayedSub1}</p>
          <p className="typing-text korean-font sub-text">{displayedSub2}</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;