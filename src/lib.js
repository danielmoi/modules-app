// require sum from lodash (IMPORT)
var sum = require('lodash/sum');

// our first module
var double = function(num) {
  return num * 2;
}

// use sum from lodash
var addFive = function(num) {
  return sum([num, 5]);
}

// our exports (EXPORT)
module.exports = {
  double: double,
  addFive: addFive
}
