var CONSTANTS = require('../constants');

var {API_BASE} = CONSTANTS;

var api = {
  getRepo(repository){
    repository = repository.toLowerCase().trim();
    var url = `${API_BASE}search/repositories?q=${repository}`;
    console.log(`${url}`);
    return fetch(url).then((res) => res.json())
  }
};

module.exports = api;