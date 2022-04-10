import handleQuery from '../controllers/searchController';
import { renderResult } from '../actions/showResult';

export default function initCallbacks() {
  this.handleQuery = handleQuery;
  this.renderResult = renderResult;
}
