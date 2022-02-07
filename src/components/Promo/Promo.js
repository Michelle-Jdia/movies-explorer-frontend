import React from 'react';
import promo from '../../images/promo.svg';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__box">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#aboutProject" className="promo__btn">Узнать больше</a>
      </div>

      <img
        src={promo}
        alt="Спираль"
        title="Спираль"
        className="promo__img"
      ></img>
    </section>
  );
}

export default Promo;
