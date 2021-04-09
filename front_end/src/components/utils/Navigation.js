import React from "react";
import { Link } from "react-router-dom";
import "../../css/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src="/logoImg.png" alt="" />
          <h1 className="logo">SHARE_BILLAGE</h1>
        </Link>
      </div>
      <div className="navbar-container">
        <Link to="/booklist" className="nav-link">
          booklist
        </Link>
        <Link to="/mypage" className="nav-link">
          mypage
        </Link>
        <Link to="/notice" className="nav-link">
          notice
        </Link>
      </div>
      <div className="navbar-container">
        <Link to="/login" className="nav-login">
          Login
        </Link>
        <Link to="/signup" className="nav-signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
