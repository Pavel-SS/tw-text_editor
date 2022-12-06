/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { Context } from '../context';
import { unique } from '../utils/unique';
import s from '../scss/listHash.module.scss';

/**
 * Компонента уникальных hash-тэгов
 * @returns ['#tag','#string', ...ect]
 */
// eslint-disable-next-line react/function-component-definition
export const ListHash = () => {
  const {
    listHash,
    setListHash,
    setHashFound,
    messages,
  } = useContext(Context);

  const delHash = (ind) => {
    setListHash(listHash.filter((e, i) => i !== ind));
  };

  const clickHash = (hashlist, e) => {
    const arrayFaundMessage = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < hashlist.length; i++) {
      if (hashlist[i].hash && hashlist[i].hash.includes(e)) {
        arrayFaundMessage.push(hashlist[i]);
      }
    }
    setHashFound(arrayFaundMessage);
  };

  return (
    <ul className={s.list_hash}>
      {unique(listHash).map((hash, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={s.list_hash__item} key={index}>
          <button
            value={hash}
            className={s.list_hash__item_search}
            onClick={(e) => {
              clickHash(messages, e.target.value);
            }}
          >
            {
                            hash
                        }
          </button>
          <button
            className={s.list_hash__item_close}
                        // eslint-disable-next-line react/jsx-indent-props
                        onClick={() => delHash(index)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};
