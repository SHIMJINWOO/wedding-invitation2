// ✅ src/components/Location.js
import React from 'react';
import './Location.css';
import mapImage from '../assets/map.png';
import kakaoIcon from '../assets/Kakao.png';
import naverIcon from '../assets/Naver.png';
import tmapIcon from '../assets/Tmap.png';

const Location = () => {
  return (
    <div className="location-section">
      <div className="section-divider">
        <h2 className="section-title" style={{ color: '#234d20' }}>예식안내</h2>
      </div>

      <div className="map-container">
        <p>2025년 11월 16일 일요일 오후 2시</p>
        <p className="venue-name">아만티 호텔 서울</p>
        <p className="venue-sub">2층 웨딩홀</p>
        <p className="venue-address">서울 마포구 월드컵북로 31</p>
        <img src={mapImage} alt="map" className="map-image" />
      </div>

      <div className="button-grid">
        <a href="https://tmap.life/39297e7e" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={tmapIcon} alt="Tmap" /> <span>티맵</span>
        </a>
        <a href="https://place.map.kakao.com/1042559480" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={kakaoIcon} alt="Kakao" /> <span>카카오내비</span>
        </a>
        <a href="https://naver.me/xJiBsZU2" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={naverIcon} alt="Naver" /> <span>네이버지도</span>
        </a>
      </div>

      <div className="info-details-section">
        <div className="info-item">
          <p className="info-title">🚗 자차</p>
          <p>아만티 호텔 주차장 이용 (B2-B5)<br/>2시간 무료 이용</p>
        </div>

        <div className="info-item">
          <p className="info-title">🚇 지하철</p>
          <p>2호선/경의중앙선/공항철도 <br/> 홍대입구역 하차 1번 출구, 도보 7분</p>
        </div>

        <div className="info-item">
          <p className="info-title">🚌 버스</p>
          <p>버스지선 (초록) 7016,7711,7737 <br/> 홍대입구역 하차 <br/>마을(초록) 마포 06, 마포09<br/> 홍대입구역 하차</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
