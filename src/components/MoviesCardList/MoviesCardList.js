import React, { useContext, useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { AppContext } from "../../contexts/AppContext";
import Preloader from "../Preloader/Preloader";
import getAmountOfCards from "../../utils/getAmountOfCards";
import { errorMessages } from "../../constants/errorMessages";
import { moviesListValues } from "../../constants/moviesListValues";

function MoviesCardList(props) {
  const {
    defaultMoviesPerPage,
    resizeTimeout,
    amountOfMoviesToLoadDesktop,
    amountOfMoviesToLoadMobile,
    mainApiUrl,
  } = moviesListValues;

  const [movies, setMovies] = useState([]);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [cardsPerPage, setCardsPerPage] = useState(defaultMoviesPerPage);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [visibleCardsCount, setVisibleCardsCount] = useState(
    getAmountOfCards()
  );

  const { isMoviesLoading, savedMoviesId } = useContext(AppContext);

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMovies(props.movies || []);
    setVisibleMovies(props.movies.slice(0, getAmountOfCards()));
  }, []);

  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCardsPerPage, resizeTimeout);
  };

  let resizeTimer;

  const updateCardsPerPage = () => {
    setCardsPerPage(defaultMoviesPerPage);
    setVisibleCardsCount(getAmountOfCards());
    setVisibleMovies(props.movies.slice(0, getAmountOfCards()));
  };

  const handleLoadMoreClick = () => {
    let amountOfCardsToLoad;
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1106) {
      amountOfCardsToLoad = 3;
    } else if (screenWidth >= 768) {
      amountOfCardsToLoad = 2;
    } else {
      amountOfCardsToLoad = 2;
    }

    const newVisibleCount = visibleCardsCount + amountOfCardsToLoad;
    setVisibleMovies(movies.slice(0, newVisibleCount));
    setVisibleCardsCount(newVisibleCount);
    if (newVisibleCount >= movies.length) {
      setButtonVisible(false);
    }
  };

  useEffect(() => {
    if (visibleMovies >= movies.length) {
      setButtonVisible(false);
    } else setButtonVisible(true);
  }, [visibleMovies, movies]);

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
