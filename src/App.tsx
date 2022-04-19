import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Comonents/Common/Header/index';
import Wrapper from './Comonents/Common/Wrapper';
import RegictrationContainer from './Comonents/Container/RegictrationContainer';
import EntranceContainer from './Comonents/Container/EntranceContainer';
import MainContainer from './Comonents/Container/MainContainer/MainContainer';
import AuthHock from './hoc/AuthHoc';
import AuthConatiner from './Comonents/Container/AuthContainer';
import TeacherContainer from './Comonents/Container/TeacherContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<Wrapper />}>
      <Route index element={<MainContainer />} />
      <Route
        path="reg"
        element={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <RegictrationContainer />
        }
      />
      <Route path="auth" element={<AuthConatiner />} />
      <Route path="course" element={<h1>Course Page</h1>} />
      <Route path="teacher" element={<TeacherContainer />} />
      <Route
        path="schedule"
        element={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <AuthHock>
            <h1>Schedule Page</h1>
          </AuthHock>
        }
      />
      <Route path="contact" element={<h1>Contact Page</h1>} />
      <Route path="entrance" element={<EntranceContainer />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Route>
  </Routes>
);

export default App;
