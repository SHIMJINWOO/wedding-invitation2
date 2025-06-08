import React from 'react';
import './Contact.css';
import coupleImage from '../assets/groom-bride.png';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <img src={coupleImage} alt="신랑신부" className="contact-top-image" />
      <h2 className="contact-title">신랑 & 신부</h2>

      <div className="contact-grid">
        <div className="contact-column">
          <h3>신랑</h3>
          <p>심진우 <a href="tel:01066610046">📞</a></p>
          <h4>혼주</h4>
          <p>아버지 심재노 <a href="tel:01076370046">📞</a></p>
          <p>어머니 정영란 <a href="tel:01028330046">📞</a></p>
        </div>
        <div className="contact-column">
          <h3>신부</h3>
          <p>임혜진 <a href="tel:01071562140">📞</a></p>
          <h4>혼주</h4>
          <p>아버지 임재상 <a href="tel:01012345678">📞</a></p>
          <p>어머니 박혜자 <a href="tel:01056781234">📞</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
