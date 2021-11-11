import React from "react";

const Connets = ({ AllConnects }) => {
  const { title, img } = AllConnects;
  return (
    <div className="connect-box3">
      <div className="text-box3">{title}</div>
      <div className="img-box3">
        <img src={img} height="24px" width="24px" alt="" />
      </div>
    </div>
  );
};

export default Connets;
