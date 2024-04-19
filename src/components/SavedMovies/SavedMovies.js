import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { AppContext } from "../../contexts/AppContext";
import filterMovies from "../../utils/filterMovies";
import { errorMessages } from "../../constants/errorMessages";

function SavedMovies({ movies, ...props }) {
  const { setMoviesLoading } = useContext(AppContext);
  const [isChecked, setChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    setMoviesResult(movies);
  }, []);

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setSearchError(errorMessages.searchFieldIsEmpty);
      return;
    }
    setSearchError("");
    setMoviesLoading(true);
    setMoviesResult(filterMovies(moviesResult, searchValue, isChecked));
    setMoviesLoading(false);
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
          <MoviesCardList action="delete" movies={moviesResult} {...props} />
        </SearchForm>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
