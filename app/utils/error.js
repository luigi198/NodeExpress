/*
* Error object for adding error codes or custom error functions,
* it will trigger catch in promises.
*/

function APIError (code) {
  this.code = code || 920;
};

APIError.prototype = new Error();
APIError.prototype.constructor = APIError;

exports.CamError = APIError;