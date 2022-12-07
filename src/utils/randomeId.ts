/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-magic-numbers */
/**
 * Функция для создания id
 * @returns '2c7fdc-656'
 */

export const randomId = () => {
  const firstLine = Math.random().toString(20).substr(2, 6);
  const secondLine = Math.floor(Math.random() * 1000);

  return `${firstLine}-${secondLine}`;
};
