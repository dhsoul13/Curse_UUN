import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetName from '../../../Store/Auth/selector';
import AuthPage from '../../Page/AuthPage';

const AuthConatiner = () => {
  const name = useSelector(GetName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, []);
  if (name) {
    navigate('/');
  }
  return <AuthPage />;
};

export default AuthConatiner;
