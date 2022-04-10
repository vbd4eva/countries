import { refs } from '../data/app';
import appState from '../controllers/appState';
import resultListTpl from 'bundle-text:../../templates/resultList.hbs';
import resultSingleTpl from 'bundle-text:../../templates/resultSingle.hbs';
import getMarkupHtml from '../../templates/getMarkupHtml';

function renderResultList(result) {
  refs.resultList.innerHTML = getMarkupHtml(resultListTpl, result);
}

function renderResultSingle(result) {
  const { name, capital, population, languages, flags } = result[0];
  const resultSingleData = {
    country: name.official,
    capital: capital[0],
    population,
    languages,
    flag: flags.svg,
  };

  const resultList = getMarkupHtml(resultSingleTpl, resultSingleData);
  refs.resultSingle.innerHTML = resultList;
}

const resultVariants = {
  none: () => {
    console.log('Нічого не знайдено');
  },
  many: () => {
    console.log('Забагато результатів');
  },
  list: renderResultList,
  single: renderResultSingle,
};

export function renderResult(type, result) {
  resultVariants[type](result);
}
