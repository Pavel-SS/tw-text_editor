/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-constructed-context-values */

import React, { FormEvent, useEffect, useState } from 'react';

import { AddNewMessage } from './components/AddNewMessage';
import { ListHash } from './components/ListHash';
import { ListMessage } from './components/ListMessage';
import { PanelFound } from './components/PanelFound';
import { Context } from './context';
import { randomId } from './utils/randomeId';
import './App.scss';
import { unique } from './utils/unique';

export type initialStateType = {
  text: string;
  hash?: string[];
  id: string;
};

const App = () => {
  const [messages, setMessages] = useState<initialStateType[]>([]);
  const [listHash, setListHash] = useState<string[]>([]);
  const [hash, setHash] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [hashFound, setHashFound] = useState<initialStateType[]>([]);

  useEffect(() => {
    const localMessages = JSON.parse(localStorage.getItem('messages') || '[]');

    if (localMessages) {
      setMessages(localMessages);
    }
    const localHash = JSON.parse(localStorage.getItem('hash_list') || '[]');

    if (localHash) {
      setListHash(localHash);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
    localStorage.setItem('hash_list', JSON.stringify(listHash));
  }, [messages, listHash]);

  const submitText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      setMessages([
        ...messages,
        {
          text,
          hash,
          id: randomId(),
        },
      ]);
    }
    const unicList = unique([...listHash, ...hash]);

    setListHash(unicList);
    setText('');
  };

  return (
    <div className="App">
      <Context.Provider
        value={{
          text,
          setText,
          hash,
          setHash,
          listHash,
          setListHash,
          hashFound,
          setHashFound,
          messages,
          setMessages,
        }}
      >
        <AddNewMessage submit={submitText} />
        <ListMessage />
        <ListHash />
        <PanelFound />
      </Context.Provider>
    </div>
  );
};

export default App;
