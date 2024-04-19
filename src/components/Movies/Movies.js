import React, { useContext, useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { AppContext } from "../../contexts/AppContext";
import filterMovies from "../../utils/filterMovies";
import { mainApi } from "../../utils/MainApi";
import { errorMessages } from "../../constants/errorMessages";

function Movies({ movies, onMovieLike, onMovieDelete, ...props }) {
  const { setMoviesLoading } = useContext(AppContext);
  const [isChecked, setChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);
  const [beatFilms, setBeatFilms] = useState([]);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    setChecked(false);
    const value = localStorage.getItem("searchValue");
    const checkbox = JSON.parse(localStorage.getItem("shortFilms"));
    const movies = JSON.parse(localStorage.getItem("moviesResult"));
    if (value) {
      setSearchValue(value);
      setChecked(checkbox);
      setMoviesResult(movies);
    }
  }, []);

  useEffect(() => {
    if (beatFilms.length > 0) {
      setMoviesResult(filterMovies(moviesResult, searchValue, isChecked));
    }
  }, [isChecked]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setSearchError(errorMessages.searchFieldIsEmpty);
      return;
    }
    setSearchError("");
    setMoviesLoading(true);
    if (beatFilms.length > 0) {
      setMoviesResult(filterMovies(beatFilms, searchValue, isChecked));
      localStorage.setItem("shortFilms", JSON.stringify(isChecked));
      localStorage.setItem("searchValue", searchValue);
      localStorage.setItem("moviesResult", JSON.stringify(moviesResult));
      setMoviesLoading(false);
    } else {
      mainApi
        .getBeatMovies()
        .then((res) => {
          setBeatFilms(res);
          setMoviesResult(filterMovies(beatFilms, searchValue, isChecked));
          localStorage.setItem("shortFilms", JSON.stringify(isChecked));
          localStorage.setItem("searchValue", searchValue);
          localStorage.setItem("moviesResult", JSON.stringify(moviesResult));
          setMoviesLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setSearchError(err);
          setMoviesLoading(false);
        });
    }
  }

  return (
    <>
      <Header />
      <main className="content-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          isChecked={isChecked}
          setChecked={setChecked}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchError={searchError}
        >
          <MoviesCardList
            action="save"
            movies={moviesResult}
            onMovieLike={onMovieLike}
            onMovieDelete={onMovieDelete}
          />
        </SearchForm>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
