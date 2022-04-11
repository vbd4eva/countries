import appState from '../data/stateModel';
import { saveToStorage } from '../tools/localStorage';
import { storageKeys } from '../data/static';

const { STORAGE_SAVED_LIST_KEY, STORAGE_SAVED_NAMES_LIST_KEY } = storageKeys;
const availableActions = {
  save: saveCountry,
  update: updateCountry,
  delete: deleteCountry,
  show: showAll,
};

export function runAction(actionKey) {
  availableActions[actionKey]?.();
}

function saveCountry() {
  const timeStamp = Date.now();
  const countryToSave = { ...appState.currentCountry, timeStamp };
  const name = countryToSave.name.official;

  appState.savedContries = [...appState.savedContries, countryToSave];
  appState.countriesNames = [...appState.countriesNames, name];

  // LocalStorage
  saveToStorage(STORAGE_SAVED_LIST_KEY, JSON.stringify(appState.savedContries));
  saveToStorage(
    STORAGE_SAVED_NAMES_LIST_KEY,
    JSON.stringify(appState.countriesNames),
  );
}

function updateCountry() {}
function deleteCountry() {}
function showAll() {}
