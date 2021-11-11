import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./ConnectWallet.css";
import Connets from "./Connets";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "#191b1f",
  borderRadius: "15px",
  border: "none",
  outline: "none",
  padding: "20px",
  maxHeight: "90vh",
};
const ConnectWallet = ({ handleOpenbtn, open2, handleClosebtn }) => {
  const [connects, setConnect] = useState([]);
  useEffect(() => {
    fetch("../../connect.json")
      .then((res) => res.json())
      .then((data) => setConnect(data));
  }, []);

  return (
    <Modal
      open={open2}
      onClose={handleClosebtn}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="typography">
          <div className="modal-title">Connect a wallet</div>
          <div className="close-icon" onClick={handleClosebtn}>
            <i class="fas fa-times"></i>
          </div>
        </div>
        <div className="connect-box">
          <div className="connect-deatils">
            By connecting a wallet, you agree to Uniswap Labs’
            <span> Terms of Service </span>
            and acknowledge that you have read and understand the Uniswap
            <span> Protocol Disclaimer.</span>
          </div>
        </div>
        <div className="connect-box-2">
          <div className="connect-text">
            <div className="part1">
              <i class="fas fa-exclamation-circle"></i>
              <p>How this app use api keys</p>
            </div>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="connect">
          {connects.map((connect) => (
            <Connets key={connect.id} AllConnects={connect} />
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectWallet;
