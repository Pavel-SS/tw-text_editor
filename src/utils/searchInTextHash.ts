/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Функция поиска hash-тэга в тексте и записи его в массив
 * @param {*} item -  строка по которой будет происходить поиск hash-тэга
 * @returns ['#tag']
 */

export const searchInTextHash = (item: string) => {
  const arrText = item.split(' ');
  const arr = [];

  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i].startsWith('#')) {
      arr.push(arrText[i]);
    }
  }
  if (arr.length !== 0) {
    return arr;
  }
};
