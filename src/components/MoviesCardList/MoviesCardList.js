import React, { useContext, useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { AppContext } from "../../contexts/AppContext";
import Preloader from "../Preloader/Preloader";
import getAmountOfCards from "../../utils/getAmountOfCards";
import {errorMessages} from "../../constants/errorMessages"

function MoviesCardList(props) {
  const [movies, setMovies] = useState([]);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [cardsPerPage, setCardsPerPage] = useState(12);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCardsCount, setVisibleCardsCount] = useState(
    getAmountOfCards()
  );
  const mainApiUrl = "https://api.nomoreparties.co/";

  const { isMoviesLoading, savedMoviesId } = useContext(AppContext);

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMovies(props.movies || []);
    setVisibleMovies(props.movies.slice(0, getAmountOfCards()));
  }, [props]);

  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCardsPerPage, 300);
  };

  let resizeTimer;

  const updateCardsPerPage = () => {
    setCardsPerPage(getAmountOfCards());
  };

  const handleLoadMoreClick = () => {
    let newVisibleCount;
    if (cardsPerPage === 12) {
      newVisibleCount = visibleCardsCount + 3;
      setVisibleMovies(movies.slice(0, newVisibleCount));
      setVisibleCardsCount(newVisibleCount);
    } else {
      newVisibleCount = visibleCardsCount + 2;
      setVisibleMovies(movies.slice(0, newVisibleCount));
      setVisibleCardsCount(newVisibleCount);
    }
    if (newVisibleCount >= movies.length) {
      setButtonVisible(false);
    }
  };

  return (
    <section className="movies">
      {isMoviesLoading ? (
        <Preloader />
      ) : visibleCardsCount > 0 ? (
        <div className="movies__container">
          {visibleMovies.map((movie) => (
            <MoviesCard
              key={movie._id || movie.id}
              movie={movie}
              name={movie.nameRU}
              link={
                !movie.image.url
                  ? movie.image
                  : `${mainApiUrl}${movie.image.url}`
              }
              duration={movie.duration}
              movieId={movie._id || movie.id}
              trailerLink={movie.trailerLink}
              isMovieLiked={
                movie.owner ? true : savedMoviesId.includes(movie.id)
              }
              {...props}
            />
          ))}
        </div>
      ) : (
        <p>{errorMessages.nothingIsFound}</p>
      )}
      {movies.length > 0 && movies.length > visibleMovies.length && (
        <button
          type="button"
          className={`movies__load-more-btn ${
            isButtonVisible ? "movies__load-more-btn_visible" : ""
          }`}
          onClick={handleLoadMoreClick}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
