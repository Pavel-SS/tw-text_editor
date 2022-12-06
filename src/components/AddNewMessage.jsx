/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */

import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import { searchInTextHash } from '../utils/searchInTextHash';

import s from '../scss/addNewMessage.module.scss';

/**
 * Компонента для ввода текста
 * @param {*} param0 - функция submit текста
 * @returns '{text: "#2332", hash: ["#2332"], id: "hi21f6-902"}'
 */
// eslint-disable-next-line react/function-component-definition
export const AddNewMessage = ({ submit }) => {
  const { text, setText, setHash } = useContext(Context);

  useEffect(() => {
    setHash(searchInTextHash(text));
  }, [text, setHash]);

  const changeHandler = (e) => {
    setText(e.target.value);
    setHash(searchInTextHash(text));
  };

  return (
    <form className={s.submit} onSubmit={submit}>
      <input className={s.submit__input} type="text" placeholder="New message..." value={text} onChange={changeHandler} />
      <button className={s.submit__btn} type="submit">
        ➕
      </button>
    </form>
  );
};
