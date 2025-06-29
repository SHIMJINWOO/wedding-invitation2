import React from 'react';
import './FamilyIntro.css';
import cover1 from '../assets/profile1.jpg'; // 신랑 사진
import cover2 from '../assets/profile2.jpg'; // 신부 사진

const FamilyIntro = () => {
  return (
    <div className="family-intro-section">
      <div className="family-wrapper">
        {/* 신랑 */}
        <div className="family-box">
          <img src={cover1} alt="신랑" className="family-photo" />
          <p className="name-label groom">
            <span className="role groom">신랑</span> <span className="name">심진우</span>
          </p>
          <p className="parents">심재노 · 정영란의 장남</p>
        </div>

        {/* 신부 */}
        <div className="family-box">
          <img src={cover2} alt="신부" className="family-photo" />
          <p className="name-label bride">
            <span className="role bride">신부</span> <span className="name">임혜진</span>
          </p>
          <p className="parents">임재성 · 박혜자의 차녀</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyIntro;
