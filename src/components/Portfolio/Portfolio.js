import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  const staticWebsiteLink = {
    pathname:
      "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
  };
  const adaptiveWebsiteLink = {
    pathname:
      "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
  };
  const spaWebsiteLink = {
    pathname:
      "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
  };

  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__projects-list">
        <li className="portfolio__project-item">
          <Link
            to={{staticWebsiteLink}}
            target="_blank"
            className="portfolio__project-link"
          >
            <h4 className="portfolio__project-name">Статичный сайт</h4>
            <div className="portfolio__project-arrow">↗</div>
          </Link>
        </li>
        <li className="portfolio__project-item">
          <Link
            to={{adaptiveWebsiteLink}}
            target="_blank"
            className="portfolio__project-link"
          >
            <h4 className="portfolio__project-name">Адаптивный сайт</h4>
            <div className="portfolio__project-arrow">↗</div>
          </Link>
        </li>
        <li className="portfolio__project-item">
          <Link
            to={{spaWebsiteLink}}
            target="_blank"
            className="portfolio__project-link"
          >
            <h4 className="portfolio__project-name">
              Одностраничное приложение
            </h4>
            <div className="portfolio__project-arrow">↗</div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
