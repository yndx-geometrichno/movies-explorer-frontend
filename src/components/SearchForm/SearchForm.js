import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <div className="search__input-container">
        <input
          name="movie"
          id="movie"
          type="text"
          className="search__input"
          placeholder="Фильм"
        ></input>
        <button type="submit" className="search__submit"></button>
      </div>
      <div className="search__checkbox-container">
        <input
          name="shortfilms"
          id="shortfilms"
          type="checkbox"
          className="search__checkbox"
        />
        <label htmlFor="shortfilms" className="search__checkbox-label">
          Короткометражки
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
