import appState from './appState';
import { saveToStorage } from '../tools/localStorage';
import { storageData } from '../data/app';

const availableActions = {
  save: saveCountry,
  update: updateCountry,
  delete: deleteCountry,
  show: showAll,
};

export function initSavedCountriesAction(actionName) {
  availableActions[actionName]?.() ||
    alert(`Така Дія "${actionName}" із Збереженими Країнами недоступна`);
}

function saveCountry() {
  const timeStamp = Date.now();
  const contrySaveData = { ...appState.currentCountry, timeStamp };
  const name = contrySaveData.name.official;
  //////////////////////////////////////////
  //
  // ЗБЕРЕЖЕННЯ
  // додати мітку часу до результату
  const dataToSave = {
    timeStamp,
    contrySaveData,
    name,
  };
  // додати до списку "savedContriesList"
  // додати до списку "saverCountriesNamesArray"
  storageData.savedContriesList.push(contrySaveData);
  storageData.saverCountriesNamesArray.push(name);

  // Оновлюємо LocalStorage
  saveToStorage(
    'savedContriesList',
    JSON.stringify(storageData.savedContriesList),
  );
  saveToStorage(
    'saverCountriesNamesArray',
    JSON.stringify(storageData.saverCountriesNamesArray),
  );
  //
  //
}

function updateCountry() {}

function deleteCountry() {}
function showAll() {}
