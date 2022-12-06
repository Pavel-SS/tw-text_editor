/**
 * Функция для сортировки повторяющихся элементов массива
 * @param {*} unic - не отсортированный массив
 * @returns ['#tag', '#script']
 */
// eslint-disable-next-line max-len, import/prefer-default-export
export const unique = (unic) => unic.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);
