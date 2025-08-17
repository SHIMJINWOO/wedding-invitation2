// ✅ src/components/Location.js
import React from 'react';
import './Location.css';
import mapImage from '../assets/map.jpg';
import kakaoIcon from '../assets/Kakao.png';
import naverIcon from '../assets/Naver.png';
import tmapIcon from '../assets/Tmap.png';

const Location = () => {
  return (
    <div className="location-section">
      <div className="section-divider">
        <h2 className="section-title" style={{ color: '#BFA26C' }}>예식안내</h2>

      </div>

      <div className="map-container">
        <p className="venue-name">2025년 11월 8일 토요일 오후 6시 10분</p>
        <p >스타시티 아트홀 영존 5층</p>
        <p className="venue-address">서울 광진구 능동로 110</p>

        {/* 지도 이미지로 대체 */}
        <img src={mapImage} alt="지도" className="map-image" />
      </div>

      <div className="button-grid">
        <a href="https://tmap.life/4af4f383" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={tmapIcon} alt="Tmap" /> <span>티맵</span>
        </a>
        <a href="https://place.map.kakao.com/12976773" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={kakaoIcon} alt="Kakao" /> <span>카카오내비</span>
        </a>
        <a href="https://naver.me/Gq9syyrT" target="_blank" rel="noopener noreferrer" className="info-button">
          <img src={naverIcon} alt="Naver" /> <span>네이버지도</span>
        </a>
      </div>

      <div className="info-details-section">
        <div className="info-item">
          <p className="info-title">🚗 자차</p>
          <p>건물 내 B1 ~ B5 | 2시간 무료 <br/>건국대 병원 지상• 지하 주차장 | 1시간 30분 무료</p>
        </div>

        <div className="info-item">
          <p className="info-title">🚇 지하철</p>
          <p>2호선 건대입구역 2번 출구, 7호선 건대입구역 3번 출구</p>
        </div>

        <div className="info-item">
          <p className="info-title">🚌 버스</p>
          <p>
          간선버스 : 240, 721, N61, N62<br/>
          지선버스 : 2016, 2222, 3217, 3220,4212<br/>
          직행버스 : 102, 3500<br/>
          공항버스 : 6013
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
