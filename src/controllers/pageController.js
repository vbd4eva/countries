import { QUERTY_HANDLE_DELAY } from '../data/static';
import { refs, callbacks } from '../data/defined';
import { debounce } from 'debounce';

export function initPageController(context) {
  addListeners();
}

function addListeners() {
  const { inputQuery, resultList, resultSingle } = refs;

  inputQuery.addEventListener(
    'input',
    debounce(onInputQuery, QUERTY_HANDLE_DELAY),
  );
  resultList.addEventListener('click', handleClickOnResultList);
  resultSingle.addEventListener('click', handleClickOnResulSingle);
}

// Обробники подій
function onInputQuery(e) {
  const query = e.target.value.trim();
  query && sendQuery(query);
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
function sendQuery(query) {
  clearResultMarkup();
  callbacks.searchByQuery(query);
}

// Функції маркапу Маркапу
function clearResultMarkup() {
  const { resultList, resultSingle } = refs;
  resultList.innerHTML = resultSingle.innerHTML = '';
}

// function onClickInsideSingleResultBlock(e) {
//   const action = e.target.dataset.action;

//   if (action === 'save') callbacks.countrySaver();
// }
// export renderResult;
