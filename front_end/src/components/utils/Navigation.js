import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Navigation.css";

function Navigation() {
  const [thisPage, setThisPage] = useState("");
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link" onClick={() => setThisPage("Home")}>
          <img src="/logoImg.png" alt="" />
          <h1 className="logo">SHARE_BILLAGE</h1>
        </Link>
      </div>
      <div className="navbar-container">
        <Link
          to="/booklist"
          className="nav-link"
          onClick={() => setThisPage("booklist")}
        >
          booklist
        </Link>
        <Link
          to="/mypage"
          className="nav-link"
          onClick={() => setThisPage("mypage")}
        >
          mypage
        </Link>
        <Link
          to="/notice"
          className="nav-link"
          onClick={() => setThisPage("notice")}
        >
          notice
        </Link>
      </div>
      <div className="navbar-container">
        <Link
          to="/login"
          className="nav-login"
          onClick={() => setThisPage("LogIn")}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="nav-signup"
          onClick={() => setThisPage("signup")}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
