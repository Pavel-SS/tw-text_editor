/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */

import React, { useEffect, useState } from 'react';
import { Context } from './context';

import { ListHash } from './components/ListHash';
import { AddNewMessage } from './components/AddNewMessage';
import { ListMessage } from './components/ListMessage';
import { randomId } from './utils/randomeId';
import { PanelFound } from './components/PanelFound';
import { checkСopy } from './utils/checkСopy';
import './App.scss';

function App() {
  const [messages, setMessages] = useState([]);
  const [listHash, setListHash] = useState([]);
  const [hash, setHash] = useState('');
  const [text, setText] = useState('');
  const [hashFound, setHashFound] = useState([]);

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

  const submitText = (e) => {
    e.preventDefault();
    if (text) {
      setMessages([...messages, {
        text,
        hash,
        id: randomId(),
      }]);
    }
    checkСopy(hash, listHash, setListHash);
    setText('');
  };

  return (
    <div className="App">
      <Context.Provider
        value={
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          {
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
          }
          }
      >
        <AddNewMessage submit={submitText} />
        <ListMessage />
        <ListHash />
        <PanelFound />
      </Context.Provider>
    </div>
  );
}

export default App;
