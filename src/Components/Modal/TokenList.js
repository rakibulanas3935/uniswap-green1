import React from "react";

const TokenLIst = ({ handleListClick, tokenBtn, disabled }) => {
  const { title, img } = tokenBtn;
  return (
    <div
      className={`token-coin-btn-modal ${disabled && 'disabled'}`}
      onClick={() => handleListClick(tokenBtn)}
      disabled={disabled}
    >
      <div className="token-img-modal">
        <img src={img} height="24px" width="24px" alt="" />
      </div>
      <div className="token-text-modal">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TokenLIst;
