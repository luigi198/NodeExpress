//----------------
//  Dependencies
//----------------

var checkRequest = require('../utils/checkRequest'),
  ApiResponse = require('../utils/ApiResponse');

//----------------
//  Methods
//----------------

exports.helloWorld = function(req, res) {
  var requestFormat = {}, result;

  requestFormat = {
    //movement: {
    //  type: 'boolean',
    //  errorNum: {
    //    noProperty: 603,
    //    invalidType: 602
    //  }
    //}
  };

  result = checkRequest.checkRequest(req.body, requestFormat);
  if(result.isValid()) {
    console.log('received msg at: ', Date.now());
    ApiResponse.Success(res, {});
  } else {
    ApiResponse.Fail(res, result.error);
  }

  
};