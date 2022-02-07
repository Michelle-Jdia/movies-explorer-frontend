import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonOnTop from '../ButtonOnTop/ButtonOnTop';

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList isSavedMovies={true} />
      <ButtonOnTop />
    </section>
  );
}

export default SavedMovies;
