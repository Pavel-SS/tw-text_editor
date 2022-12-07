/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { ChangeEvent, useContext } from 'react';

import { initialStateType } from '../App';
import { Context } from '../context';
import s from '../scss/listMessage.module.scss';

/**
 * Компонента списка сообщений
 * @returns "some text #tag"
 */

export const ListMessage = () => {
  const { messages, setMessages } = useContext(Context);

  const edit = (id: string) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setMessages(
        messages.map((message: initialStateType) =>
          message.id === id
            ? {
                ...message,
                [e.target.name]: e.target.value,
              }
            : {
                ...message,
              },
        ),
      );
    };

    return handleChange;
  };

  const delMessage = (id: string) => {
    setMessages(messages.filter((message: initialStateType) => message.id !== id));
  };

  return (
    <ul className={s.list_message}>
      {messages.map((mess: initialStateType) => (
        <li className={s.list_message__text} key={mess.id}>
          <input
            className={s.list_message__input}
            type="text"
            name="text"
            value={mess.text}
            onChange={edit(mess.id)}
          />
          <button
            type="button"
            className={s.list_message__btn}
            onClick={() => delMessage(mess.id)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};
