import React from "react";
import "./SearchForm.css";

function SearchForm({
  isChecked,
  setChecked,
  searchValue,
  setSearchValue,
  handleSearchSubmit,
  searchError,
  ...props
}) {
  return (
    <>
      <form className="search" id="searchForm">
        <div className="search__input-container">
          <input
            name="movie"
            id="movie"
            type="text"
            className="search__input"
            placeholder="Фильм"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          ></input>
          <button
            type="submit"
            className="search__submit"
            onClick={handleSearchSubmit}
            form="searchForm"
          ></button>
        </div>
        <div className="search__checkbox-container">
          <input
            name="shortfilms"
            id="shortfilms"
            type="checkbox"
            className="search__checkbox"
            defaultChecked={isChecked}
            onClick={() => setChecked((state) => !state)}
          />
          <label htmlFor="shortfilms" className="search__checkbox-label">
            Короткометражки
          </label>
        </div>
      </form>
      {searchError ? <p className="search__error">{searchError}</p> : null}
      {props.children}
    </>
  );
}

export default SearchForm;
