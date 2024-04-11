import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  const currentPath = window.location.pathname;

  return (
    <header className={`header${currentPath === "/" ? " header_blue" : ""}`}>
      <div className="header__container">
        <Link to={"/"} className="header__logo"></Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
