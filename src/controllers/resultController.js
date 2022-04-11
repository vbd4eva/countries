import { refs } from '../data/defined';
import { resultTypeList } from '../data/static';
import appState from '../data/stateModel';
import resultListTpl from 'bundle-text:../templates/resultList.hbs';
import countryBriefTpl from 'bundle-text:../templates/countryBrief.hbs';
import resultSinglePanelTpl from 'bundle-text:../templates/resultSinglePanel.hbs';
import getMarkupHtml from '../templates/getMarkupHtml';

const {
  NONE_RESULT_TYPE,
  MANY_RESULT_TYPE,
  LIST_RESULT_TYPE,
  SINGLE_RESULT_TYPE,
} = resultTypeList;

const getResultType = countriesCount =>
  !countriesCount
    ? NONE_RESULT_TYPE
    : countriesCount > 10
    ? MANY_RESULT_TYPE
    : countriesCount > 1
    ? LIST_RESULT_TYPE
    : SINGLE_RESULT_TYPE;

const resultActions = {
  [NONE_RESULT_TYPE]: resultsNoneAction,
  [MANY_RESULT_TYPE]: resultsManyAction,
  [LIST_RESULT_TYPE]: resultListAction,
  [SINGLE_RESULT_TYPE]: resultSingleAction,
};

export function initResultAction(result) {
  appState.currentCountry = null; //скидає поточну країну

  const type = getResultType(result.length);

  resultActions[type](result);
}
//Опис дій в залежності від результату пошуку
function resultListAction(result) {
  refs.resultList.innerHTML = getMarkupHtml(resultListTpl, result);
}
function resultSingleAction(result) {
  result = result[0];
  appState.currentCountry = result;
  const { name, capital, population, languages, flags } = result;
  const officialName = name.official;

  const coutryIndex = getSavedCoutryIndex(officialName);
  const isSaved = !!~coutryIndex;
  const timeStamp = appState.savedContries[coutryIndex]?.timeStamp;

  const panelData = {
    isSaved,
    coutryIndex,
    timeStamp,
  };
  console.log('panelData', panelData);

  const countryBriefData = {
    country: officialName,
    capital: capital[0],
    population,
    languages,
    flag: flags.svg,
  };

  const countryBriefMarkup = getMarkupHtml(countryBriefTpl, countryBriefData);
  const resultSinglePanelMarkup = getMarkupHtml(
    resultSinglePanelTpl,
    panelData,
  );
  refs.resultSingle.innerHTML = resultSinglePanelMarkup + countryBriefMarkup;
}
function resultsNoneAction(result) {
  console.log('Нічого не знайдено');
}
function resultsManyAction(result) {
  console.log('Забагато результатів');
}

// function isCountrySaved(officialName) {
//   return appState.countriesNames.includes(officialName);
// }

function getSavedCoutryIndex(officialName) {
  return appState.countriesNames.indexOf(officialName);
}
