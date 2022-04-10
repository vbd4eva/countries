const appState = {
  _query: '',
  get query() {
    return this._query;
  },

  set query(value) {
    this._query = value;
  },
  //
  _currentCountry: null,
  get currentCountry() {
    return this._currentCountry;
  },

  set currentCountry(value) {
    this._currentCountry = value;
  },
  //

  _savedContriesList: [],

  get savedContriesList() {
    return this._savedContriesList;
  },
  set savedContriesList(value) {
    this._savedContriesList = value;
  },

  _saverCountriesNamesArray: [],

  get _saverCountriesNamesArray() {
    return this.__saverCountriesNamesArray;
  },
  set savedContriesList(value) {
    this._savedContriesList = value;
  },

  // countriesCustomGroups: [],
};

export default appState;
