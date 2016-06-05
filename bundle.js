System.registerDynamic("npm:lodash@4.13.1/_baseSum.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;
    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }
  module.exports = baseSum;
  return module.exports;
});

System.registerDynamic("npm:lodash@4.13.1/identity.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function identity(value) {
    return value;
  }
  module.exports = identity;
  return module.exports;
});

System.registerDynamic("npm:lodash@4.13.1/sum.js", ["npm:lodash@4.13.1/_baseSum.js", "npm:lodash@4.13.1/identity.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseSum = $__require('npm:lodash@4.13.1/_baseSum.js'),
      identity = $__require('npm:lodash@4.13.1/identity.js');
  function sum(array) {
    return (array && array.length) ? baseSum(array, identity) : 0;
  }
  module.exports = sum;
  return module.exports;
});

System.register('src/es6-lib.js', ['npm:lodash@4.13.1/sum.js'], function (_export) {
  'use strict';

  var sum, double, addFive;
  return {
    setters: [function (_npmLodash4131SumJs) {
      sum = _npmLodash4131SumJs['default'];
    }],
    execute: function () {
      double = function double(number) {
        return number * 2;
      };

      addFive = function addFive(number) {
        return sum([number, 5]);
      };

      _export('double', double);

      _export('addFive', addFive);
    }
  };
});
System.register('src/entry.js', ['src/es6-lib.js'], function (_export) {
  // require our module (IMPORT)
  // var lib = require('../dist/es6-lib.js');

  // use the double function from our module
  'use strict';

  var lib;
  return {
    setters: [function (_srcEs6LibJs) {
      lib = _srcEs6LibJs['default'];
    }],
    execute: function () {
      console.log(lib.double(2));

      // use the addFive function from our module
      console.log(lib.addFive(2));
    }
  };
});
//# sourceMappingURL=bundle.js.map