import { storageKeys } from '../data/static';

const get = key => localStorage.getItem(key);
export const saveToStorage = (key, json) => localStorage.setItem(key, json);

export const getAll = () => {
  return Object.values(storageKeys).reduce((acc, key) => {
    const storageData = get(key);
    if (!storageData) return acc;

    const sorageObj = { [key]: JSON.parse(storageData) };
    return { ...acc, ...sorageObj };
  }, {});
};
