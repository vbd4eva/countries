import * as storage from '../tools/localStorage';
import * as appData from '../data/app';
import initCallbacks from './initCallbacks';
import { initPageController } from '../controllers/pageController';

export default function initApp() {
  initStorage();

  initCallbacks.call(appData.callbacks);

  initPageController(appData);
}

function initStorage() {
  const storageData = storage.getAll();
  console.log('initStorage', storageData);
}
