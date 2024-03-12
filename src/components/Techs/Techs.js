import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <div className="techs__container" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__subheader">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__items">
        <div className="techs__item">HTML</div>
        <div className="techs__item">CSS</div>
        <div className="techs__item">JS</div>
        <div className="techs__item">React</div>
        <div className="techs__item">Git</div>
        <div className="techs__item">Express.js</div>
        <div className="techs__item">mongoDB</div>
      </div>
    </div>
  );
}

export default Techs;
