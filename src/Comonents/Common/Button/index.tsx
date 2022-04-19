/* eslint-disable no-shadow */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable indent */
import { send } from 'node:process';
import React from 'react';
import styled, { StyledComponent } from 'styled-components';

type ButtonType = {
  bg?: number | null;
  type?: 'button' | 'submit' | 'reset' | undefined;
  send?: any;
};

// eslint-disable-next-line object-curly-newline
const Button: React.FC<ButtonType> = ({ bg, children, type = 'button', send }) => {
  const ButtonClick: StyledComponent<'button', any, {}, never> = styled.button`
    background: ${bg === 1
      ? 'linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%)'
      : 'linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%)'};
    height: 100%;
    width: 100%;
    color: #fff;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    transition: 0.5s ease all;
    &:hover {
      transition: 0.5s ease all;
      transform: scale(0.9, 0.9);
    }
  `;
  return (
    <ButtonClick type={type} onClick={send}>
      {children}
    </ButtonClick>
  );
};

export default Button;
