import React, { useEffect, useState } from "react";
import Tokenmodal from "../Modal/Tokenmodal";
import "./Card.css";
import fetch from "../../helper/fetch";
import ConnectWallet from "../Modal/ConnectWallet";
import Navigation from "../Navigation";
import SettingModal from "../Modal/SettingModal";

const Card = () => {
  const [selectedValue, setSelectedValue] = useState();

  const [selectedValue1, setSelectedValue1] = useState();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const callFetch = async () => {
    const tokenData = await fetch;
    setSelectedValue(tokenData?.[0]);
    setSelectedValue1(tokenData?.[1]);
  };
  useEffect(() => {
    callFetch();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  //input field 2
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  //inputfield2
  const handleClose1 = (value) => {
    setOpen1(false);
    setSelectedValue1(value);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className="header">
      <div className="box">
        <div className="swap">
          <div className="row1">
            <h1 className="row1-title">Swap</h1>
          </div>
          <div className="row1-icon">
            <i className="fas fa-cog" onClick={handleClickOpen3}></i>
          </div>
        </div>

        <div className="row-input">
          <div className="token-coin-btn" onClick={handleClickOpen}>
            <div className="token-img">
              <img src={selectedValue?.img} height="24px" width="24px" alt="" />
            </div>
            <div className="token-text">
              <p>{selectedValue?.title}</p>
            </div>
            <div className="token-icon">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>

          <input type="text" className="input" placeholder="0.0" id="" />
        </div>

        <div className="icon">
          <i class="fas fa-arrow-down"></i>
        </div>

        <div className="row-input">
          <div className="token-coin-btn" onClick={handleClickOpen1}>
            <div className="token-img">
              <img
                src={selectedValue1?.img}
                height="24px"
                width="24px"
                alt=""
              />
            </div>
            <div className="token-text">
              <p>{selectedValue1?.title}</p>
            </div>
            <div className="token-icon">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>

          <input type="text" className="input" placeholder="0.0" id="" />
        </div>

        <div className="btn" onClick={handleClickOpen2}>
          <button className="button">Connect wallet</button>
        </div>
      </div>

      <Tokenmodal
        handleOpen={handleClickOpen}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        onCloseModal={() => setOpen(false)}
      />

      <Tokenmodal
        handleOpen={handleClickOpen1}
        selectedValue={selectedValue1}
        open={open1}
        onClose={handleClose1}
        onCloseModal={() => setOpen1(false)}
      />
      <ConnectWallet
        handleOpenbtn={handleClickOpen2}
        handleClosebtn={handleClose2}
        open2={open2}
      ></ConnectWallet>
      <SettingModal
        handleOpenbtn2={handleClickOpen3}
        handleClosebtn2={handleClose3}
        open3={open3}
      ></SettingModal>
    </div>
  );
};

export default Card;
