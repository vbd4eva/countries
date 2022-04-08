const LOCAL_STORAGE_KEY = 'appCountriesInf';

export const getLocalStorage = () => localStorage.getItem(LOCAL_STORAGE_KEY);
export const setLocalStorage = countryObj =>
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(countryObj));
