import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header />
      <main className="content-movies">
        <SearchForm />
        <MoviesCardList action="save" />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
