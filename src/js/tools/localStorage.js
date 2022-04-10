import { storageKeys } from '../data/static';

const get = key => localStorage.getItem(key);
// const set = (key, json) => localStorage.setItem(key, json);

export const getAll = () =>
  Object.keys(storageKeys).reduce((acc, key) => {
    const storageData = get(key);
    if (!storageData) return acc;

    const sorageObj = { [key]: JSON.parse(storageData) };
    return { ...acc, ...sorageObj };
  }, {});
