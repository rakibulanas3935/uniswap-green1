import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./tokenmodal.css";
import TokenList from "./TokenList";
import Boxmodal2 from "./Boxmodal2";
import fetch from "../../helper/fetch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "#003c31",
  borderRadius: "20px",
  border: "none",
  outline: "none",
};

const Tokenmodal = ({ open, onClose, selectedValue, onCloseModal }) => {
  const [tokens, setTokens] = useState([]);
  const [searchToken, setSearchToken] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch.then((data) => {
      setTokens(data);
      setSearchToken(data);
    });
  }, []);

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(() => {
    const search = tokens.filter(
      (token) =>
        (token?.title)
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        (token?.description)
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
    setSearchToken(search);
  }, [searchText, tokens]);

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="box1">
            <div className="typography">
              <div className="modal-title">Select a Token</div>
              <div className="close-icon" onClick={onCloseModal}>
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div className="search-box">
              <input
                type="text"
                className="search"
                placeholder="Search a value or paste"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* Coin list start */}
            <div className="coin-list">
              {tokens.map((token) => (
                <TokenList
                  key={token.id}
                  handleListClick={handleListItemClick}
                  tokenBtn={token}
                  disabled={selectedValue?.id === token.id}
                />
              ))}
            </div>
          </div>
          <div className="box-2">
            {searchToken.map(
              (token) =>
                selectedValue?.id !== token.id && (
                  <Boxmodal2
                    key={token.id}
                    handleListClick={handleListItemClick}
                    tokenBtn={token}
                  />
                )
            )}
          </div>
          <div className="manage-task">
            <div className="task">
              <i class="far fa-edit"></i>{" "}
              <span className="text">Manage Token list</span>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Tokenmodal;
