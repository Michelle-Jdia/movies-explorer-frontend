import React from 'react';

import './MoviesCard.css';

function MoviesCard({ isSavedMovies }) {
  return (
    <li className="moviesCard">
      <div className="moviesCard__title-box">
        <div className="moviesCard__title-wrap">
          <p className="moviesCard__title">promo</p>
          <p className="moviesCard__time">1.5</p>
        </div>
        <button
          className={`moviesCard__button-save ${
            isSavedMovies ? 'moviesCard__button-save_saved' : ''
          }`}
          type="button"
        ></button>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="moviesCard__image-link"
      >
        <img className="moviesCard__image" src="https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="promo"></img>
      </a>

    </li>
  );
}

export default MoviesCard;
