import React, { useContext, useState, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import { btnNames } from "../../constants/btnNames";

function Navigation() {
  const appContext = useContext(AppContext);
  const currentPath = window.location.pathname;
  const { isLoggedIn } = appContext;
  const [isMobileWidth, setMobileWidth] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  useEffect(() => {
    if (screenWidth < 901) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
      setMenuOpened(false);
    }
  }, [screenWidth]);

  function handleMenuBtnClick() {
    if (isMenuOpened) {
      setMenuOpened(false);
    } else setMenuOpened(true);
  }

  return (
    <nav className={`navigation${isLoggedIn ? " navigation_authorized" : ""}`}>
      {isLoggedIn &&
        (isMobileWidth ? (
          <button
            type="button"
            className="navigation__menu-btn"
            onClick={handleMenuBtnClick}
          ></button>
        ) : (
          <div className="navigation__movie">
            <Link
              to={"/movies"}
              className={`navigation__movie-button ${
                currentPath === "/movies" && "navigation__movie-button_active"
              }`}
            >
              {btnNames.movies}
            </Link>
            <Link
              to={"/saved-movies"}
              className={`navigation__movie-button ${
                currentPath === "/saved-movies" &&
                "navigation__movie-button_active"
              }`}
            >
              {btnNames.savedMovies}
            </Link>
          </div>
        ))}
      <div className="navigation__profile">
        {isLoggedIn ? (
          isMobileWidth ? null : (
            <Link to={"/profile"} className="navigation__profile-button">
              {btnNames.account}
              <div className="navigation__profile-picture"></div>
            </Link>
          )
        ) : (
          <div className="navigation__profile-auth">
            <Link to={"/signup"} className="navigation__profile-btn-signup">
              {btnNames.registration}
            </Link>
            <Link to={"/signin"} className="navigation__profile-btn-signin">
              {btnNames.login}
            </Link>
          </div>
        )}
      </div>

      <div
        className={`navigation__side-menu-container ${
          isMenuOpened && "navigation__side-menu-container_opened"
        }`}
      >
        <div className="navigation__side-menu-shadow"></div>
        <div className="navigation__side-menu">
          <div className="navigation__top-links">
            <Link
              className={`navigation__movie-button ${
                currentPath === "/" && "navigation__movie-button_active"
              }`}
              to={"/"}
            >
              {btnNames.mainPage}
            </Link>
            <Link
              to={"/movies"}
              className={`navigation__movie-button ${
                currentPath === "/movies" && "navigation__movie-button_active"
              }`}
            >
              {btnNames.movies}
            </Link>
            <Link
              to={"/saved-movies"}
              className={`navigation__movie-button ${
                currentPath === "/saved-movies" &&
                "navigation__movie-button_active"
              }`}
            >
              {btnNames.savedMovies}
            </Link>
          </div>
          <Link to={"/profile"} className="navigation__profile-button">
            {btnNames.account}
            <div className="navigation__profile-picture"></div>
          </Link>
          <button
            type="button"
            className="navigation__close-menu-btn"
            onClick={handleMenuBtnClick}
          ></button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
