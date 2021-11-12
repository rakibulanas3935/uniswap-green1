import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SettingModal.css";
const SettingModal = ({ handleOpenbtn2, open3, handleClosebtn2 }) => {
  const style = {
    position: "absolute",
    top: "59%",
    left: "52%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    bgcolor: "#003c31",
    borderRadius: "20px",
    border: "none",
    padding: "1rem",
    outline: "none",
  };

  return (
    <Modal
      open={open3}
      onClose={handleClosebtn2}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="text">Transaction settings</div>
        <div className="text2">Slippage tolerance ?</div>
        <div className="section3">
          <button className="setting-btn">Auto</button>
          <input type="text" className="setting-input" placeholder="0.10%" />
        </div>
        <div className="section4">
          <h1 className="text2">Transaction deadline ?</h1>
          <div className="section4-part2">
            <input
              type="text"
              className="setting-input-minute"
              placeholder="30"
            />
            <h1 className="section4-text">minutes</h1>
          </div>
        </div>
        <div className="section5">
          <h1 className="section5-title text">Interface setting</h1>
          <div className="section5-part2">
            <h1 className="section5-text">Auto router ?</h1>
            <div class="toggle-button-cover">
              <input
                id="toggle-on"
                class="toggle toggle-left"
                name="toggle"
                value="false"
                type="radio"
                checked
              />
              <label for="toggle-on" class="btn-radio">
                On
              </label>
              <input
                id="toggle-off"
                class="toggle toggle-right"
                name="toggle"
                value="true"
                type="radio"
              />
              <label for="toggle-off" class="btn-radio">
                off
              </label>
            </div>
          </div>
          <div className="section5-part2">
            <h1 className="section5-text">Export router ?</h1>
            <div class="toggle-button-cover">
              <input
                id="toggle-on1"
                class="toggle1 toggle-left1"
                value="false"
                type="radio"
              />
              <label for="toggle-on1" class="btn-radio1">
                On
              </label>
              <input
                id="toggle-off1"
                class="toggle1 toggle-right1"
                value="true"
                type="radio"
                checked
              />
              <label for="toggle-off1" class="btn-radio1">
                Off
              </label>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SettingModal;
