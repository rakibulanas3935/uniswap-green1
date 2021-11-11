import React from "react";
import Logo from "./favicon.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="mb-9">
      <div class="logo">
        <img src={Logo} alt="" width="24px" />
      </div>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <a class="active" href="/anas">
            Home
          </a>
        </li>
        <li>
          <a href="/rakib">About</a>
        </li>
        <li>
          <a href="/sakib">Services</a>
        </li>
        <li>
          <a href="/anik">Contact</a>
        </li>
        <li>
          <a href="/anas">Feedback</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
