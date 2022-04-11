import { selectors, QUERTY_HANDLE_DELAY } from '../data/static';
import { refs, callbacks } from '../data/app';
import { debounce } from 'debounce';

export function initPageController(context) {
  initRefs.call(context);
  addListeners.call(context);
}
function initRefs() {
  const { INPUT_QUERY, RESULT_LIST, RESULT_SINGLE } = selectors;

  this.refs.inputQuery = document.querySelector(INPUT_QUERY);
  this.refs.resultList = document.querySelector(RESULT_LIST);
  this.refs.resultSingle = document.querySelector(RESULT_SINGLE);
}
function addListeners() {
  const { inputQuery, resultList, resultSingle } = this.refs;

  inputQuery.addEventListener(
    'input',
    debounce(onInputQuery, QUERTY_HANDLE_DELAY),
  );
  resultList.addEventListener('click', handleClickOnResultList);
  resultSingle.addEventListener('click', handleClickOnResulSingle);
}

//

// Обробники подій
function onInputQuery(e) {
  const query = e.target.value.trim();
  query && sendQuery(query);
}
function sendQuery(query) {
  clearResultMarkup.call(refs);
  callbacks.handleQuery(query);
}
function handleClickOnResultList(e) {
  const country = e.target.dataset.country;
  if (!country) return;
  refs.inputQuery.value = country;
  sendQuery(country);
}
function handleClickOnResulSingle(e) {
  const action = e.target.dataset.action;
  console.log(' Result Action = ', action);
  callbacks.runAction(action);
}

//
// Функції маркапу Маркапу
function clearResultMarkup() {
  const { resultList, resultSingle } = this;
  resultList.innerHTML = resultSingle.innerHTML = '';
}

// function onClickInsideSingleResultBlock(e) {
//   const action = e.target.dataset.action;

//   if (action === 'save') callbacks.countrySaver();
// }
// export renderResult;
