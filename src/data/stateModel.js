const appState = {
  _query: '',
  _currentCountry: null,

  _savedContries: [],
  _countriesNames: [],
  // countriesCustomGroups: [],

  get query() {
    return this._query;
  },
  set query(value) {
    this._query = value;
  },
  //
  get currentCountry() {
    return this._currentCountry;
  },
  set currentCountry(value) {
    this._currentCountry = value;
  },
  //
  get savedContries() {
    return this._savedContries;
  },
  set savedContries(value) {
    this._savedContries = value;
  },
  //
  get countriesNames() {
    return this._countriesNames;
  },
  set countriesNames(value) {
    this._countriesNames = value;
  },
};

export default appState;
