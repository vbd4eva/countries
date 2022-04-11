import fetchCountries from '../tools/fetchCountries';
import { callbacks } from '../data/defined.js';
import appState from '../data/stateModel';

export default function searchByQuery(query) {
  const result = fetchCountries(query); //посилає запит
  resultHandler(result); //оброблює результат запиту
}

const resultHandler = result => {
  result
    .then(result => {
      callbacks.initResultAction(result);
    })
    .catch(console.warn);
};
