import { getFromStorage } from '../tools/localStorage';
import { storageKeys } from '../data/static';
import * as appData from '../data/defined';

import { initPageController } from '../controllers/pageController';
import appState from '../data/stateModel';

export default function initApp() {
  initStorage();

  initPageController(appData);
}

function initStorage() {
  const { STORAGE_SAVED_LIST_KEY, STORAGE_SAVED_NAMES_LIST_KEY } = storageKeys;

  appState.savedContries = JSON.parse(getFromStorage(STORAGE_SAVED_LIST_KEY));

  appState.countriesNames = JSON.parse(
    getFromStorage(STORAGE_SAVED_NAMES_LIST_KEY),
  );
}
