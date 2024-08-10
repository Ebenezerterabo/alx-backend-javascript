import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const result = handleResponseFromAPI(promise);

console.log(result);
