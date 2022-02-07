import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <div>
          <h2 className="profile__title" >Привет</h2>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              Имя
            </label>
            <input
              name="name"
              className="profile__input"
              type="text"
              placeholder="Michelle"
              pattern="^[a-zA-Zа-яёЁА-Я\s-]+$"
              minLength="2"
              maxLength="30"
              required
            ></input>
          </div>
          <div className="profile__inputs-block">
            <label htmlFor="password" className="profile__label">
              E-mail
            </label>
            <input
              name="email"
              className="profile__input"
              type="email"
              placeholder="vtal96@mail.ru"
              required
            ></input>
          </div>
        </div>
        <div>
          <button className="profile__submit-btn">
            Редактировать
          </button>
          <Link className="profile__logout-btn">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
