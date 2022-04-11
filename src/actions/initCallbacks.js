import handleQuery from '../controllers/searchController';
import { renderResult } from '../actions/showResult';
import { runAction } from '../controllers/savedCountriesController';
export default function initCallbacks() {
  this.handleQuery = handleQuery;
  this.renderResult = renderResult;
  this.runAction = runAction;
}
