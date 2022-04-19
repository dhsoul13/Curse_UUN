/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
import React from 'react';
import style from './Input.module.scss';

type InputType = {
  title: string;
  type?: 'password' | 'text';
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  plaseholder: string;
  className?: string;
};
const Input = ({ title, type = 'text', value, setValue, plaseholder, className }: InputType) => {
  const handler = (e: any) => {
    setValue((prev) => e.target.value);
  };

  return (
    <div>
      <h2 className={`${style.title} ${className}`}>{title}</h2>
      <input
        className={`${style.input} ${className}`}
        type={type}
        value={value}
        onChange={handler}
        placeholder={plaseholder}
      />
    </div>
  );
};

export default Input;
