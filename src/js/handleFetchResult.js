const callbacksForResult = {
  none: null,
  many: null,
  list: null,
  single: null,
};

export const setResultHandlerCallback = Obj => {
  Object.keys(callbacksForResult).forEach(key => {
    Obj[key] && (callbacksForResult[key] = Obj[key]);
  });
};

const handleNoResult = result => {
  if (callbacksForResult.none) {
    callbacksForResult.none(result);
    return;
  }
  console.log('handleNoResult');
  console.log(result);
};

const handleResultToMany = () => {
  if (callbacksForResult.many) {
    callbacksForResult.many();
    return;
  }
  console.log('handleResultsToMany');
};

const handleResultList = result => {
  if (callbacksForResult.list) {
    callbacksForResult.list(result);
    return;
  }
  console.log('handleResultsList');
  console.log(result);
};

const handleResultSingle = result => {
  result = result[0];
  if (callbacksForResult.single) {
    callbacksForResult.single(result);
    return;
  }
  console.log('handleResultSingle');
  console.log(result);
};

const handleResult = result => {
  const countriesCount = result.length;

  if (countriesCount > 10) {
    handleResultToMany();
    return;
  }

  if (countriesCount > 1) {
    handleResultList(result);
    return;
  }

  handleResultSingle(result);
};

export const handleFetchResults = result => {
  result
    .then(result => {
      if (!result.length) {
        handleNoResult(result);
        return;
      }
      handleResult(result);
    })
    .catch(console.warn);
};
