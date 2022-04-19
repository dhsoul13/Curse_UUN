/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegictrationPage from '../../Page/RegictrationPage';
import GetName from '../../../Store/Auth/selector';

const RegictrationContainer = () => {
  const name = useSelector(GetName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);
  return <RegictrationPage />;
};

export default RegictrationContainer;
