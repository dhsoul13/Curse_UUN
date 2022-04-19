import React from 'react';
import style from './Form.module.scss';

type FormType = {
  title: string;
};
const Form: React.FC<FormType> = ({ children, title }) => {
  const a = 5;
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <form method="post">{children}</form>
    </div>
  );
};

export default Form;
