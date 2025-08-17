import React from 'react';
import './FamilyIntro.css';
import cover1 from '../assets/profile3.jpg'; // 공통 사진

const FamilyIntro = () => {
  return (
    <div className="family-intro-section">
      <div className="photo-container">
        <img src={cover1} alt="신랑 신부" className="main-photo" />
      </div>

      <div className="info-row">
        {/* 신랑 */}
        <div className="family-box groom">
          <p className="name-label">
            <span className="role groom">신랑</span> <span className="name">신제천</span>
          </p>
          <p className="parents">신봉옥 · 허명자 의 장남</p>
        </div>

        {/* 신부 */}
        <div className="family-box bride">
          <p className="name-label">
            <span className="role bride">신부</span> <span className="name">구&nbsp;&nbsp;슬</span>
          </p>
          <p className="parents">구자걸 · 이은지 의 장녀</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyIntro;
