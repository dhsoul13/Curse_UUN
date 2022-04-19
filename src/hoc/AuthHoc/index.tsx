/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import GetName from '../../Store/Auth/selector';

const AuthHock: React.FC = ({ children }) => {
  const Auth = useSelector(GetName);
  const isAuth = Auth;
  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/entrance" />;
};

export default AuthHock;
