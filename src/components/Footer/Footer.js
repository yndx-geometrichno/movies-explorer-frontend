import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { btnNames } from "../../constants/btnNames";

function Footer() {
  const yandexLink = { pathname: "https://praktikum.yandex.ru/" };
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
          <Link to={{yandexLink}} target="_blank" className="footer__link">
            {btnNames.yandex}
          </Link>
          <Link to={{githubLink}} target="_blank" className="footer__link">
            {btnNames.gitHub}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
