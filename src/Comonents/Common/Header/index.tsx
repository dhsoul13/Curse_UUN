import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserNameAdd } from '../../../Store/Auth/action';
import GetName from '../../../Store/Auth/selector';
import { UserInfoClear } from '../../../Store/UserInfo/action';
import GetInfo from '../../../Store/UserInfo/selector';
import Button from '../Button';
import style from './header.module.scss';

const Header = () => {
  const a = 5;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = () => {
    navigate('/entrance');
  };
  const handlerExit = () => {
    dispatch(UserNameAdd(''));
    dispatch(UserInfoClear());
  };
  const name = useSelector(GetName);
  const info = useSelector(GetInfo);
  console.log(info);
  return (
    <div className={style.wrapper}>
      <div>
        <img src="img/LOGO.png" alt="" />
      </div>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Курсы</NavLink>
          </li>
          <li>
            <NavLink to="/teacher">Преподаватели</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Расписание</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Контакт</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.button}>
        {' '}
        {name ? (
          <>
            <div>{name}</div>
            <div>
              <Button bg={2} send={handlerExit}>
                Выйти
              </Button>
              <div>{info[0]}</div>
              <div>{info[1]}</div>
            </div>
          </>
        ) : (
          <Button bg={2} send={handler}>
            Авторизация
          </Button>
        )}
        {/* <Button bg={2} send={handler}>
          Авторизация
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
