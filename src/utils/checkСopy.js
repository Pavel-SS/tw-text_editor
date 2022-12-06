/**
 * Функция для сортировки уникальных hash-тэгов
 * @param {*} item - hash прооверяемый на наличие
 * @param {*} itemList - массив уникальных hash-тэгов
 * @param {*} setItemList  - функция обновления массива hash-тэгов
 */
// eslint-disable-next-line import/prefer-default-export
export const checkСopy = (item, itemList, setItemList) => {
  if (item) {
    const includList = itemList.flat().join(' ').split(' ').includes(item.join(' '));
    if (!includList) {
      setItemList([...itemList, ...item]);
    }
  }
};
