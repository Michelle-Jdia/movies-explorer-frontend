import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="searchForm" required>
      <div className="searchForm__search-block">
        <div className="search__box">
          <span className="search-icon"></span>
          <input
            name="searchField"
            className="searchForm__search"
            type="text"
            placeholder="Фильм"
            required
          ></input>
          <div className="searchForm__find-block">
            <button
              type="submit"
              className="searchForm__find-btn"
              value=""
            ></button>
          </div>
        </div>
        <hr className="searchForm__line-v" />

        <FilterCheckbox />
      </div>
      <hr className="main__line-search" />
    </form>
  );
}

export default SearchForm;
