/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// require our module (IMPORT)
	var lib = __webpack_require__(1);

	// use the double function from our module
	console.log(lib.double(2));

	// use the addFive function from our module
	console.log(lib.addFive(2));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// require sum from lodash (IMPORT)
	var sum = __webpack_require__(2);

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var baseSum = __webpack_require__(3),
	    identity = __webpack_require__(4);

	/**
	 * Computes the sum of the values in `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {number} Returns the sum.
	 * @example
	 *
	 * _.sum([4, 2, 8, 6]);
	 * // => 20
	 */
	function sum(array) {
	  return (array && array.length)
	    ? baseSum(array, identity)
	    : 0;
	}

	module.exports = sum;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.sum` and `_.sumBy` without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {number} Returns the sum.
	 */
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }
/******/ ]);