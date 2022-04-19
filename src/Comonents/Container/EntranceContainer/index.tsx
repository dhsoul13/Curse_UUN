import React from 'react';
import { useNavigate } from 'react-router-dom';
import EntrancePage from '../../Page/EntrancePage';

const EntranceContainer = () => {
  const navigate = useNavigate();
  const navigateToAuth = () => {
    navigate('/auth');
  };
  const navigateToReg = () => {
    navigate('/reg');
  };
  return <EntrancePage navigateToAuth={navigateToAuth} navigateToReg={navigateToReg} />;
};

export default EntranceContainer;
