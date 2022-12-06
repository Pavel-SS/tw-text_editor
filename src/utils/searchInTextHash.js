/**
 * Функция поиска hash-тэга в тексте и записи его в массив
 * @param {*} item -  строка по которой будет происходить поиск hash-тэга
 * @returns ['#tag']
 */

// eslint-disable-next-line import/prefer-default-export, consistent-return
export const searchInTextHash = (item) => {
  const arrText = item.split(' ');
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrText.length; i++) {
    if (arrText[i].startsWith('#')) {
      arr.push(arrText[i]);
    }
  }
  if (arr.length !== 0) {
    return arr;
  }
};
