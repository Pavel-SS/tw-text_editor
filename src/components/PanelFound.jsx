/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { Context } from '../context';
import s from '../scss/panelFaundHash.module.scss';

/**
 * Компонента найденых сообщений по hash-тегу
 * @returns [{text: "#3 tag", hash: ["#3"], id: "14b58h-31"},{...}]
 */
// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const PanelFound = () => {
  const { hashFound, setHashFound } = useContext(Context);

  const delHashFound = () => {
    setHashFound([]);
  };

  return (
    <div className={`${hashFound.length ? s.faund_panel : s.faund_panel_close}`}>
      <ul>
        {hashFound && hashFound.map((hash) => (
          <li className={s.faund_panel__message} key={hash.id}>
            {hash.text}
          </li>
        ))}
      </ul>
      <button
        className={s.faund_panel__btn}
        onClick={delHashFound}
      >
        ✖
      </button>
    </div>

  );
};
