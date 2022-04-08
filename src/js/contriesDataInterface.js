import { getLocalStorage, setLocalStorage } from './localStorage';

let country = {
  savedList: [],
  current: {},
};

const getCurrentCountry = () => ({ ...country.current });
export const resetCurrentCountry = () => {
  country.current = {};
  syncWithLocalStorage();
};
const getSavedCountriesList = () => [...country.savedList];

export const setCurrentCountry = countryData => {
  country.current = { ...countryData };
  syncWithLocalStorage();
};
export function saveCountry() {
  country.savedList.push(country.current);
  syncWithLocalStorage();
}

export function initData() {
  const storage = getLocalStorage();
  if (!storage) return;
  country = JSON.parse(storage);
}

function syncWithLocalStorage() {
  setLocalStorage(country);
}
