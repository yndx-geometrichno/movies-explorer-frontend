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
  const [isChecked, setChecked] = useState(
    JSON.parse(localStorage.getItem("shortFilms")) || false
  );
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue") || ""
  );
  const [moviesResult, setMoviesResult] = useState(
    JSON.parse(localStorage.getItem("moviesResult")) || []
  );
  const [beatFilms, setBeatFilms] = useState([]);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMoviesLoading(true);
        const beatMoviesResponse = await mainApi.getBeatMovies();
        setBeatFilms(beatMoviesResponse);
        setMoviesResult(
          filterMovies(beatMoviesResponse, searchValue, isChecked)
        );
        settingToStorage();
        setMoviesLoading(false);
        if (moviesResult.length < 1) {
          setSearchError(errorMessages.nothingIsFound);
        }
      } catch (err) {
        console.error(err);
        setSearchError(err);
        setMoviesLoading(false);
      }
    };

    if (beatFilms.length === 0 || moviesResult.length === 0) {
      console.log("gettttt");
      fetchData();
    } else {
      setMoviesResult(filterMovies(beatFilms, searchValue, isChecked));
      settingToStorage();
      if (moviesResult.length < 1) {
        setSearchError(errorMessages.nothingIsFound);
      }
    }
  }, [isChecked]);

  useEffect(() => {
    settingToStorage();
  }, [moviesResult]);

  function settingToStorage() {
    localStorage.setItem("shortFilms", JSON.stringify(isChecked));
    localStorage.setItem("searchValue", searchValue);
    localStorage.setItem("moviesResult", JSON.stringify(moviesResult));
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setSearchError(errorMessages.searchFieldIsEmpty);
      return;
    }
    setSearchError("");
    if (beatFilms.length > 0) {
      console.log("I'm setting from state");
      setMoviesResult((prevState) =>
        filterMovies(beatFilms, searchValue, isChecked)
      );
      settingToStorage();
    } else {
      setMoviesLoading(true);
      mainApi
        .getBeatMovies()
        .then((res) => {
          setBeatFilms(res);
          setMoviesResult(filterMovies(beatFilms, searchValue, isChecked));
          console.log("I'm setting res from beatMovies");
          settingToStorage();
          setMoviesLoading(false);
          if (moviesResult.length < 1) {
            setSearchError(errorMessages.nothingIsFound);
          }
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
