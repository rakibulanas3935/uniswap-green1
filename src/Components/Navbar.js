import React from "react";
import logo from "./favicon.png";
import img from "../download.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="position">
        <div className="logo">
          <img src={logo} alt="" width="24px" />
        </div>

        <ul className="nav-item">
          <li>
            <a className="active" href="/">
              Swap
            </a>
          </li>
          <li>
            <a href="/trading">Pool</a>
          </li>
          <li>
            <a href="/Access">Vote</a>
          </li>
          <li>
            <a href="/faq">Chart</a>
          </li>
        </ul>
        <div className="part3-nav">
          <div className="etherthium">
            <img src={img} alt="" height="20px" width="20px" />
            <p className="navtext">Etherthium</p>
          </div>
          <div className="btn-connect-nav">
            <button className="btn-connet-wallet">Connect wallet</button>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
