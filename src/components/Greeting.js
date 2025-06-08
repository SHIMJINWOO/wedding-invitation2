import React from 'react';
import './Greeting.css';

const Greeting = () => {
  return (
    <div className="greeting-section">
      <div className="section-divider">
        <hr />
        <h2 className="section-title">인사말</h2>
        <hr />
      </div>
      <p>
        유난히 잘 웃는 사람,<br />
        그 웃음을 참 좋아하던 사람.<br />
        그런 두 사람이 이제<br />
        하나의 길을 함께 걸으려 합니다.<br /><br />
        저희의 새로운 시작이<br />
        사랑과 축복 속에서 더욱 빛날 수 있도록<br />
        기쁜 마음으로 함께해 주시길 바랍니다.
      </p>
    </div>
  );
};

export default Greeting;
