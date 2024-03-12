import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="aboutproject">
      <div className="project__container">
        <h2 className="project__header">О проекте</h2>

      <ul className="project__about-container">
        <li className="project__about-item">
          <h3 className="project__about-item_subheader">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__about-item_content">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__about-item">
          <h3 className="project__about-item_subheader">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__about-item_content">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__progress-container">
        <div className="project__progress-container_one-week">
            <div className="project__progress-bar_one-week project__progress-bar">1 неделя</div>
            <div className="project__progress-caption_text">Back-end</div>
        </div>
        <div className="project__progress-container_four-week">
            <div className="project__progress-bar_four-week project__progress-bar">4 недели</div>
            <div className="project__progress-caption_text">Front-end</div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutProject;
