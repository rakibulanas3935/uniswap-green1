import React from "react";

const Boxmodal2 = ({ handleListClick, tokenBtn }) => {
  const { title, img, description } = tokenBtn;
  return (
    <div className="box-btn" onClick={() => handleListClick(tokenBtn)}>
      <div className="img">
        <img src={img} height="24px" width="24px" alt="" />
      </div>
      <div className="box-text">
        <p className="box-title">{title}</p>
        <p className="box-description">{description}</p>
      </div>
    </div>
  );
};

export default Boxmodal2;
