// Dependencies
var api = require('./app/api/api');

// Methods
exports.routes = function(router) {
  router.get('/', api.helloWorld);
};