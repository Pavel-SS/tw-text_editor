/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-plusplus */

import React, { useContext } from 'react';

import { Context } from '../context';
import s from '../scss/listHash.module.scss';
import { unique } from '../utils/unique';

/**
 * Компонента уникальных hash-тэгов
 * @returns ['#tag','#string', ...ect]
 */

export const ListHash = () => {
  const { listHash, setListHash, setHashFound, messages } = useContext(Context);

  const delHash = (ind: number) => {
    setListHash(listHash.filter((e: string, i: number) => i !== ind));
  };

  const clickHash = (hashlist: any, e: string) => {
    const arrayFaundMessage = [];

    for (let i = 0; i < hashlist.length; i++) {
      if (hashlist[i].hash && hashlist[i].hash.includes(e)) {
        arrayFaundMessage.push(hashlist[i]);
      }
    }
    setHashFound(arrayFaundMessage);
  };

  return (
    <ul className={s.list_hash}>
      {unique(listHash).map((hash: string, index: number) => (
        <li className={s.list_hash__item} key={index}>
          <button
            type="button"
            value={hash}
            className={s.list_hash__item_search}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              clickHash(messages, e.currentTarget.value);
            }}
          >
            {hash}
          </button>
          <button
            type="button"
            className={s.list_hash__item_close}
            onClick={() => delHash(index)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};
