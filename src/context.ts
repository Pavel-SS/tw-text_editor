import { createContext } from 'react';

import { initialStateType } from './App';

export type contextType = {
  text: string;
  setText: (t: string) => void;
  hash: string[];
  setHash: (h: string[]) => void;
  listHash: string[];
  setListHash: (l: string[]) => void;
  hashFound: initialStateType[];
  setHashFound: (h: initialStateType[]) => void;
  messages: initialStateType[];
  setMessages: (h: initialStateType[]) => void;
};
export const Context = createContext<contextType>({
  text: '',
  setText: () => {},
  hash: [],
  setHash: () => {},
  listHash: [],
  setListHash: () => {},
  hashFound: [],
  setHashFound: () => {},
  messages: [],
  setMessages: () => {},
});
