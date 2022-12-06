/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { Context } from '../context';

import s from '../scss/listMessage.module.scss';

/**
 * Компонента списка сообщений
 * @returns "some text #tag"
 */
// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const ListMessage = () => {
  const { messages, setMessages } = useContext(Context);

  const edit = (id) => {
    const handleChange = (e) => {
      setMessages(
        messages.map((message) => (message.id === id ? {
          ...message,
          [e.target.name]: e.target.value,
        } : {
          ...message,
        })),
      );
    };
    return handleChange;
  };

  const delMessage = (id) => {
    setMessages(messages.filter((messageId) => messageId.id !== id));
  };

  return (
    <ul className={s.list_message}>
      {messages.map((mess) => (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <li className={s.list_message__text} key={mess.id}>
          <input className={s.list_message__input} type="text" name="text" value={mess.text} onChange={edit(mess.id)} />
          <button
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
