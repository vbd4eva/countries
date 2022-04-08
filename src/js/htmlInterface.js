import { debounce } from 'debounce';
import selectors from '../json/selectors.json';
import getMarkupHtml from '../templates/getMarkupHtml';
import resultListTpl from 'bundle-text:../templates/resultList.hbs';
import resultSingleTpl from 'bundle-text:../templates/resultSingle.hbs';

let refs = {
  input: null,
  list: null,
  single: null,
};
let callbacks = {
  queryHandler: null,
  countrySaver: null,
};

const QUERTY_HANDLE_DELAY = 500;

function setREfs() {
  Object.keys(selectors).forEach(key => {
    const el = document.querySelector(selectors[key]);
    if (el) refs[key] = el;
  });
}

function setCallback(obj) {
  Object.keys(obj).forEach(key => (callbacks[key] = obj[key]));
}

function addListeners() {
  refs.input.addEventListener(
    'input',
    debounce(onInputQuery, QUERTY_HANDLE_DELAY),
  );
  refs.list.addEventListener('click', clickResultList);
  refs.single.addEventListener('click', onClickInsideSingleResultBlock);
}

function onInputQuery(e) {
  console.log('onInputQuery');
  const query = e.target.value.trim();
  if (!query) return;
  clearResultMarkup();
  callbacks.queryHandler && callbacks.queryHandler(query);
}

function clickResultList(e) {
  const country = e.target.dataset.country;
  if (!country) return;

  refs.input.value = country;

  clearResultMarkup();
  callbacks.queryHandler && callbacks.queryHandler(country);
}

function onClickInsideSingleResultBlock(e) {
  const action = e.target.dataset.action;

  if (action === 'save') callbacks.countrySaver();
}

function clearResultMarkup() {
  refs.list.innerHTML = '';
  refs.single.innerHTML = '';
}

export function renderResultList(result) {
  const resultList = getMarkupHtml(resultListTpl, result);
  refs.list.innerHTML = resultList;
}

export function renderResultSingle(result) {
  let { name, capital, population, languages, flags } = result;
  const singleData = {
    country: name.common,
    capital: capital[0],
    population,
    languages,
    flag: flags.svg,
  };

  const resultList = getMarkupHtml(resultSingleTpl, singleData);
  refs.single.innerHTML = resultList;
}

export function initHtmlInterface() {
  setREfs();

  addListeners();

  return setCallback;
}
