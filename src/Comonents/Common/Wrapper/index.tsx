import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './wrapper.module.scss';

const Wrapper = () => (
  <div className={style.wrapper}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Wrapper;
