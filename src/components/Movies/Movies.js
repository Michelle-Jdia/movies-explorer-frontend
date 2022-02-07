import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoreMoviesBtn from '../MoreMoviesBtn/MoreMoviesBtn';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const isLoading = false;

  return (
    <>
      <Preloader isLoading={isLoading} />
      <SearchForm />

      <MoviesCardList />
      <MoreMoviesBtn />
    </>
  );
}

export default Movies;
