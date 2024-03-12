import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const yandexLink = { pathname: "http://praktikum.yandex.ru/" };
  const githubLink = {
    pathname: "https://github.com/yndx-geometrichno",
  };

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__container">
        <p className="footer__year">&copy;{year}</p>
        <div className="footer__links">
          <Link to={yandexLink} target="_blank" className="footer__link">
            Яндекс.Практикум
          </Link>
          <Link to={githubLink} target="_blank" className="footer__link">
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
