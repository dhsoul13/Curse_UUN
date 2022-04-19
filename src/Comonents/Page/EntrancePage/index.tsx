import React from 'react';
import Button from '../../Common/Button';
import style from './AuthPage.module.scss';

type EntrancePageType = {
  navigateToAuth: () => void;
  navigateToReg: () => void;
};

const EntrancePage = ({ navigateToAuth, navigateToReg }: EntrancePageType) => (
  <div className={style.wrapper}>
    <h2 className={style.title}>Авторизация</h2>
    <div className={style.button}>
      <Button send={navigateToAuth}>Войти</Button>
    </div>
    <div className={style.button}>
      <Button send={navigateToReg}>Регистрация</Button>
    </div>
  </div>
);

export default EntrancePage;
