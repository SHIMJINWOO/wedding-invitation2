import React from 'react';
import './Account.css';

const AccountModal = ({ show, onClose, accountInfo }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountInfo.number);
    alert('계좌번호가 복사되었습니다.');
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{accountInfo.owner}</h3>
        <p>{accountInfo.bank} {accountInfo.number}</p>
        <button onClick={handleCopy}>복사하기</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default AccountModal;