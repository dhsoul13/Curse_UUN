/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeRequest from '../../../network';
import { UserAddDate } from '../../../Store/Users/action';
import GetUsers from '../../../Store/Users/selector';
import TeacherPage from '../../Page/TeacherPage';

const TeacherContainer = () => {
  const dispatch = useDispatch();
  const date = useSelector(GetUsers);
  useEffect(() => {
    dispatch(UserAddDate());
  }, []);
  return <TeacherPage date={date} />;
};

export default TeacherContainer;
