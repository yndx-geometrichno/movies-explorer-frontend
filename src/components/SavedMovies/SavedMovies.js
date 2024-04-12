import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header />
      <main className="content-movies">
        <SearchForm />
        <MoviesCardList action="delete" />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
