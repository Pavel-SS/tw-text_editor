/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Функция для сортировки повторяющихся элементов массива
 * @param {*} unic - не отсортированный массив
 * @returns ['#tag', '#script']
 */

export const unique = (unic: string[]) =>
  unic.reduce(
    (acc: string[], item: string) =>
      acc.includes(item) || item.length === 0 ? acc : [...acc, item],
    [],
  );
