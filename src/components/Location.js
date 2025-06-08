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
        <hr />
        <h2 className="section-title">위치</h2>
        <hr />
      </div>

      <p>아만티 호텔 서울 2층 웨딩홀</p>
      <p>서울 마포구 월드컵북로 31</p>
      <p>Tel: 0507-1305-0159</p>

      <div className="location-map">
        <a href="https://naver.me/FTMcD1p3" target="_blank" rel="noopener noreferrer">
          <img src={mapImage} alt="map" />
        </a>
      </div>

      <div className="location-link-icons">
        <a href="https://naver.me/xJiBsZU2" target="_blank" rel="noopener noreferrer">
          <img src={naverIcon} alt="naver" />
          <span>네이버</span>
        </a>
        <a href="https://tmap.life/39297e7e" target="_blank" rel="noopener noreferrer">
          <img src={tmapIcon} alt="tmap" />
          <span>티맵</span>
        </a>
        <a href="https://place.map.kakao.com/1042559480" target="_blank" rel="noopener noreferrer">
          <img src={kakaoIcon} alt="kakao" />
          <span>카카오</span>
        </a>
      </div>

      <div className="location-details">
        <h3>대중교통 안내</h3>
        <p>2호선 홍대입구역 1번출구 도보 7분</p>
        <h3>주차안내</h3>
        <p>건물 지하 주차, 약 500대 수용 가능</p>
      </div>
    </div>
  );
};

export default Location;
