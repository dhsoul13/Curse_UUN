/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
/* eslint-disable react/require-default-props */
import React from 'react';
import Card from '../../Common/Card';
import style from './TeacherPage.module.scss';

type TeacherPageType = {
  date: any[];
};
// eslint-disable-next-line no-unused-vars
const TeacherPage = ({ date }: TeacherPageType) => {
  const dateUser = date;
  console.log(dateUser);
  return (
    <>
      {dateUser.length ? (
        <div className={style.container}>
          <div className={style.title}>Преподаватели:</div>
          <div className={style.wrapper}>
            <div className={style.filter} />
            <div className={style.cards}>
              <>
                {' '}
                {date.map((el) => (
                  <Card info={el} />
                ))}
              </>
            </div>
          </div>
        </div>
      ) : (
        <h1>Загрузка</h1>
      )}
    </>
  );
};

export default TeacherPage;

{
  /* <div className={style.container}>
<div className={style.title}>Преподаватели:</div>
<div className={style.wrapper}>
  <div className={style.filter} />
  <div className={style.cards}>
    {date?.map((el) => {
      <Card info={el} />;
    })}
  </div>
</div>
</div> */
}
