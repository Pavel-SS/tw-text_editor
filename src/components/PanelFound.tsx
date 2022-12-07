/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useContext } from 'react';

import { initialStateType } from '../App';
import { Context } from '../context';
import s from '../scss/panelFaundHash.module.scss';

/**
 * Компонента найденых сообщений по hash-тегу
 * @returns [{text: "#3 tag", hash: ["#3"], id: "14b58h-31"},{...}]
 */

export const PanelFound = () => {
  const { hashFound, setHashFound } = useContext(Context);

  const delHashFound = () => {
    setHashFound([]);
  };

  return (
    <div className={`${hashFound.length ? s.faund_panel : s.faund_panel_close}`}>
      <ul>
        {hashFound &&
          hashFound.map((hash: initialStateType) => (
            <li className={s.faund_panel__message} key={hash.id}>
              {hash.text}
            </li>
          ))}
      </ul>
      <button type="button" className={s.faund_panel__btn} onClick={delHashFound}>
        ✖
      </button>
    </div>
  );
};
