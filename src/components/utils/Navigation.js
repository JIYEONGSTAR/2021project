import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Navigation.css";

function Navigation() {
  const [thisPage, setThisPage] = useState("");
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">SHARE_BILLAGE</h1>
      </Link>
      <div className="navbar-container">
        <Link to="/" className="nav-link" onClick={() => setThisPage("Home")}>
          Home
        </Link>
        <Link
          to="/mypage"
          className="nav-link"
          onClick={() => setThisPage("mypage")}
        >
          mypage
        </Link>
        <Link
          to="/setting"
          className="nav-link"
          onClick={() => setThisPage("setting")}
        >
          setting
        </Link>
        <Link
          to="/signup"
          className="nav-link"
          onClick={() => setThisPage("signup")}
        >
          signup
        </Link>
      </div>
      <Link
        to="/login"
        className="nav-login"
        onClick={() => setThisPage("LogIn")}
      >
        Login
      </Link>
      <div className="navbar-page">
        <h1>{thisPage}</h1>
      </div>
    </nav>
  );
}

export default Navigation;
