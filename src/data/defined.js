import { selectors } from './static';
import searchByQuery from '../actions/searchCountry';
import { initResultAction } from '../controllers/resultController';
import { runAction } from '../controllers/savedCountriesController';
import { selectors } from './static';

const { INPUT_QUERY, RESULT_LIST, RESULT_SINGLE } = selectors;

export const refs = {
  inputQuery: document.querySelector(INPUT_QUERY),
  resultList: document.querySelector(RESULT_LIST),
  resultSingle: document.querySelector(RESULT_SINGLE),
};

export const callbacks = {
  searchByQuery,
  initResultAction,
  runAction,
};
