import React, { useState } from 'react';
import AccountModal from './AccountModal';
import './Account.css';

const Account = () => {
  const [modalInfo, setModalInfo] = useState(null);

  const groomAccount = {
    owner: '신랑 심진우',
    bank: '신한은행',
    number: '110-307-940143',
  };

  const brideAccount = {
    owner: '신부 임혜진',
    bank: '농협은행',
    number: '00-0012-012323',
  };

  return (
    <div className="account-wrapper">
      <h2>Account</h2>
      <p>축하의 마음을 담아 축의금을 전달해보세요.</p>
      <div className="account-buttons">
      <button className="account-btn groom" onClick={() => setModalInfo(groomAccount)}>신랑측 마음</button>
      <button className="account-btn bride" onClick={() => setModalInfo(brideAccount)}>신부측 마음</button>

      </div>
      <AccountModal show={modalInfo !== null} accountInfo={modalInfo || {}} onClose={() => setModalInfo(null)} />
    </div>
  );
};

export default Account;
