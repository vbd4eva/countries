import fetchCountries from '../tools/fetchCountries';
import { callbacks } from '../data/app.js';
import appState from '../data/stateModel';

export default function handleQuery(query) {
  const result = fetchCountries(query); //посилає запит

  appState.currentCountry = null; //скидає поточну країну

  resultHandler(result); //оброблює результат запиту
}

const getResultType = countriesCount =>
  countriesCount > 10 ? 'many' : countriesCount > 1 ? 'list' : 'single';

const resultHandler = result => {
  result
    .then(result => {
      if (!result.length) {
        callbacks.renderResult('none', result);
        return;
      }
      const type = getResultType(result.length);
      callbacks.renderResult(type, result);
    })
    .catch(console.warn);
};
