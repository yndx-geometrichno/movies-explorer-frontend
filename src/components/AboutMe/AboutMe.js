import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import profilePhoto from "../../images/profile-photo.svg";

function AboutMe() {
  const githubLink = {
    pathname: "https://github.com/yndx-geometrichno",
  };

  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__header">Студент</h2>
      <div className="aboutme__profile">
        <div className="aboutme__profile-container">
          <h3 className="aboutme__profile-name">Виталий</h3>
          <h4 className="aboutme__profile-subheader">Фронтенд-разработчик, 30 лет</h4>
          <p className="aboutme__profile-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to={githubLink} target="_blank" className="aboutme__profile-github">
            Github
          </Link>
        </div>
        <img src={profilePhoto} className="aboutme__profile-photo" alt="Фото Виталия" />
      </div>
    </section>
  );
}

export default AboutMe;
