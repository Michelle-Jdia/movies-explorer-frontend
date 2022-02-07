import React from 'react';

import './AboutMe.css';
import '../Main/Main.css';

import photo from '../../images/profile-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="main__title">Студент</h2>
      <hr className="main__line" />
      <div className="aboutMe__resume">
        <p className="resume__name">Мишель</p>
        <p className="resume__profession">
          Front-end developer 29 лет
        </p>
        <p className="resume__about">
          Я живу в Санкт-Петербурге. Я люблю играть на фортепиано, а ещё увлекаюсь баскетболом.
          6 месяцев назад начал работать на немецкую компанию “Avonis”
          и продолжаю учиться в Яндексе Практикуме.
        </p>
        <img className="resume__image" src={photo} alt="Фото студента"></img>
        <ul className="resume__links">
          <li className="resume__links-item"><a className="resume__link" href="https://github.com/Michelle-Jdia" rel="noreferrer" target="_blank">GitHub</a></li>
          <li className="resume__links-item"><a className="resume__link" href="https://twitter.com/Michelle_Jdia" rel="noreferrer" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
