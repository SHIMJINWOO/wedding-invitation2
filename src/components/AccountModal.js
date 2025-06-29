import React from 'react';
import './AccountModal.css';

const AccountModal = ({ accounts, onClose }) => {
  if (!accounts) return null;

  const copyToClipboard = (rawNumber) => {
    const cleaned = rawNumber.replace(/[^0-9]/g, '');
    navigator.clipboard.writeText(cleaned);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>계좌정보</h3>
        {accounts.map((acc, index) => (
          <div key={index} className="account-entry">
            <div className="account-name">{acc.name}</div>
            <div className="account-details">
              <span className="account-number">{acc.bank} {acc.number}</span>
              <button onClick={() => copyToClipboard(acc.number)}>복사</button>
            </div>
          </div>
        ))}
        <button className="close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default AccountModal;
