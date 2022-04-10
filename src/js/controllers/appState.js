const appState = {
  _query: '',
  get query() {
    return this._query;
  },

  set query(value) {
    this._query = value;
  },
};

export default appState;
