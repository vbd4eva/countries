import * as storage from '../tools/localStorage';
import * as appData from '../data/app';
import initCallbacks from './initCallbacks';
import { initPageController } from '../controllers/pageController';
import appState from '../controllers/appState';

export default function initApp() {
  initStorage();

  initCallbacks.call(appData.callbacks);

  initPageController(appData);
}

function initStorage() {
  const storageData = storage.getAll();
  Object.keys(storageData).forEach(key => {
    appState[key] = storageData[key];
  });
}
