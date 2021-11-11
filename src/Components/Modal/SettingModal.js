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
    bgcolor: "#2c2f36",
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
                Yes
              </label>
              <input
                id="toggle-off"
                class="toggle toggle-right"
                name="toggle"
                value="true"
                type="radio"
              />
              <label for="toggle-off" class="btn-radio">
                No
              </label>
            </div>
          </div>
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
                Yes
              </label>
              <input
                id="toggle-off"
                class="toggle toggle-right"
                name="toggle"
                value="true"
                type="radio"
              />
              <label for="toggle-off" class="btn-radio">
                No
              </label>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SettingModal;
