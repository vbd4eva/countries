import {
  initData,
  saveCountry,
  setCurrentCountry,
  resetCurrentCountry,
} from './js/contriesDataInterface';
import {
  initHtmlInterface,
  renderResultList,
  renderResultSingle,
} from './js/htmlInterface';
import fetchCountries from './js/fetchCountries';
import {
  setResultHandlerCallback,
  handleFetchResults,
} from './js/handleFetchResult';

// init Countries Data
initData();
// інітіюємо HtmlInterface - отримаємо функцію ініціалізації Калбеків
const setCalbackToHtmlInterface = initHtmlInterface();
// Сетимо калбеки
setCalbackToHtmlInterface({
  queryHandler: handleInputedCountryName, //Обробка "query" зі сторінки
  countrySaver: saveCountry, //Зберегає отримані дані Країни - до списку збережених
});
// //Обробка "query" зі сторінки
function handleInputedCountryName(contryName) {
  const fetchResults = fetchCountries(contryName); //посилає запит
  resetCurrentCountry();
  handleFetchResults(fetchResults); //оброблює результат запиту
}
//
//
// передаємо калбеки на кожен результат
setResultHandlerCallback({
  none: actionResultNone,
  many: actionResultMany,
  list: renderResultList, // + // Знайдено декілька країн [2,10]
  single: actionResultSingle,
});
// Нічого не знайдено
function actionResultNone() {
  alert('Нічого не знайдено');
  console.log(
    '- Викидуэ "нотіфікашку"-> "No matches found. Please change query!"',
  );
}
// Знайдено забагато Країн (>10)
function actionResultMany() {
  alert('Забагато результатів');
  console.log(
    'Викидуэ "нотіфікашку"-> "Too many matches found. Please enter a more specific query!"',
  );
}

// Знайдено одну країну
function actionResultSingle(result) {
  // console.log('actionResultSingle');
  // console.log(
  //   '- "в интерфейсе рендерится разметка с данными о стране: название, столица, население, языки и флаг"',
  // );
  setCurrentCountry(result);
  renderResultSingle(result);
}
