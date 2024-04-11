import React from "react";
import "./NavTab.css";
import { HashLink } from "react-router-hash-link";

function NavTab() {
  return (
    <nav>
      <ul className="navtab">
        <li className="navtab__item">
          <HashLink to={"#aboutproject"} className="navtab__link">О проекте</HashLink>
        </li>
        <li className="navtab__item">
          <HashLink to={"#techs"} className="navtab__link">Технологии</HashLink>
        </li>
        <li className="navtab__item">
          <HashLink to={"#aboutme"} className="navtab__link">Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
