/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Common/Button';
import Form from '../../Common/Form';
import Input from '../../Common/Input';
import style from './AuthPage.module.scss';
import { cheackNameFunction, validateEmail } from '../../../helper/function_valid';
import { UserNameAdd } from '../../../Store/Auth/action';

const RegictrationPage = () => {
  const [name, setName] = useState('');
  const [cheackName, setCheackName] = useState(true);
  const [email, setEmail] = useState('');
  const [cheackEmail, setCheackEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [сheackPassword, setCheackPassword] = useState('');
  const [checkTwoPassword, setCheckTwoPassword] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (сheackPassword.length > 0) {
      if (password === сheackPassword) {
        setCheckTwoPassword(true);
      } else {
        setCheckTwoPassword(false);
      }
    }
  }, [password, сheackPassword]);

  const sendForm = () => {
    if (password.length > 10) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
    let result = true;
    if (name[name.length - 1] === ' ') {
      const end = name.length - 1;
      const nameCorrect = name.slice(0, end);
      result = cheackNameFunction(nameCorrect);
    } else {
      cheackNameFunction(name);
      result = cheackNameFunction(name);
    }
    if (result) {
      setCheackName(true);
    } else {
      setCheackName(false);
    }
    if (validateEmail(email)) {
      setCheackEmail(true);
    } else {
      setCheackEmail(false);
    }
    if (password === сheackPassword) {
      setCheckTwoPassword(true);
    } else {
      setCheckTwoPassword(false);
    }
    if (password.length > 10 && result && validateEmail(email) && password === сheackPassword) {
      console.log({ name, email });
      dispatch(UserNameAdd(name));
    }
  };

  return (
    <div className={style.wrapper}>
      <Form title="Регистрация">
        <Input
          title={`ФИО:  ${cheackName ? '' : 'не подходит'}`}
          value={name}
          setValue={setName}
          plaseholder="Введите имя"
          className={`${cheackName ? '' : 'err'}`}
        />
        <Input
          title={`Email:  ${cheackEmail ? '' : 'не совпадает'}`}
          value={email}
          setValue={setEmail}
          plaseholder="Введите email"
          className={`${cheackEmail ? '' : 'err'}`}
        />
        <Input
          title={`Password:  ${passwordCheck ? '' : 'не совпадает'}`}
          type="password"
          value={password}
          setValue={setPassword}
          plaseholder="Введите пароль еще раз"
          className={`${passwordCheck ? '' : 'err'}`}
        />

        <Input
          title={`Password проверка:  ${checkTwoPassword ? '' : 'не совпадает'}`}
          type="password"
          value={сheackPassword}
          setValue={setCheackPassword}
          plaseholder="Введите пароль еще раз"
          className={`${checkTwoPassword ? '' : 'err'}`}
        />
        {/* <span>{checkTwoPassword ? '' : 'Пароль не совпадает'}</span> */}
        <div className={style.button}>
          <Button bg={1} type="button" send={sendForm}>
            Авторизация
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegictrationPage;

// {
//   /* <Input title="Password" type="password" />
//       <Input title="Повторить пароль" type="password" /> */
// }
