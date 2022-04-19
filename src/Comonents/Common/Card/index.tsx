/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Card.module.scss';

type CardType = {
  info: any;
};
const Card = ({ info }: CardType) => {
  const a = 5;
  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <img src="img/user.png" alt="" />
      </div>
      <div className={style.info}>
        <h2>Информация</h2>
      </div>
      <div className={style.informs}>
        <h2>{`Имя: ${info.name}`}</h2>
        <h2>{`Email: ${info.email}`}</h2>
        <h2>{`Телефон:  ${info.phone}`}</h2>
        <h2>
          Сайт
          <a href="/">афыаы</a>
        </h2>
      </div>
    </div>
  );
};

export default Card;
