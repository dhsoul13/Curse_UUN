/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../Common/Form';
import style from './AuthPage.module.scss';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import { RegUser } from '../../../helper/RegUser';
import { UserNameAdd } from '../../../Store/Auth/action';
import { UserInfoAdd, UserInfoClear } from '../../../Store/UserInfo/action';
import GetInfo from '../../../Store/UserInfo/selector';

const AuthPage = () => {
  const dispatsch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [cheackEmail, setCheackEmail] = useState(true);
  const [cheackPassword, setCheackPassword] = useState(true);
  const sendForm = () => {
    if (email !== '' && password !== '') {
      const success = RegUser.find((el) => !!(el.email === email && el.password === password));
      if (success) {
        setCheackEmail(true);
        setCheackPassword(true);
        dispatsch(UserNameAdd(success.name));
        dispatsch(UserInfoAdd(success.email, success.age));
      } else {
        setCheackEmail(false);
        setCheackPassword(false);
      }
    } else {
      setCheackEmail(false);
      setCheackPassword(false);
    }
  };
  return (
    <div className={style.wrapper}>
      <Form title="Авторизация">
        <Input
          title="Email"
          setValue={setEmail}
          value={email}
          plaseholder="Введите email"
          className={`${cheackEmail ? '' : 'err'}`}
        />
        <Input
          title="Password"
          setValue={setPasword}
          value={password}
          plaseholder="Введите password"
          type="password"
          className={`${cheackPassword ? '' : 'err'}`}
        />
        <Button send={sendForm} type="button">
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default AuthPage;

// const success = RegUser.find((el) => {
//   if (el.email === email && el.password === password) {
//     setCheackEmail((prev) => prev);
//     dispatsch(UserNameAdd(el.name));
//     setCheackPassword((prev) => prev);
//   } else {
//     setCheackEmail((prev) => !prev);
//     setCheackPassword((prev) => !prev);
//   }
