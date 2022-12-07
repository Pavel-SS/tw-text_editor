/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react';

import { Context } from '../context';
import s from '../scss/addNewMessage.module.scss';
import { searchInTextHash } from '../utils/searchInTextHash';
/**
 * Компонента для ввода текста
 * @param {*} param0 - функция submit текста
 * @returns '{text: "#2332", hash: ["#2332"], id: "hi21f6-902"}'
 */
type submitType = {
  submit: (e: FormEvent<HTMLFormElement>) => void;
};

export const AddNewMessage = ({ submit }: submitType) => {
  const { text, setText, setHash } = useContext(Context);

  useEffect(() => {
    setHash(searchInTextHash(text) ?? ['']);
  }, [text, setHash]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setHash(searchInTextHash(text) as string[]);
  };

  return (
    <form className={s.submit} onSubmit={submit}>
      <input
        className={s.submit__input}
        type="text"
        placeholder="New message..."
        value={text}
        onChange={changeHandler}
      />
      <button className={s.submit__btn} type="submit">
        ➕
      </button>
    </form>
  );
};
