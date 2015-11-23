/**
 * Sub class module object(modulebase.js)
 */
var PREFIX  = 'Module : ';
var util    = require('util');
var events  = require('EventEmitter');

// Load super class from module
var SuperClass  = require('./modulebase.js').ModuleBase;

/**
 * Constructor
 */
var Module = function(logger) {
  console.log(PREFIX, 'Constructor called.');
  var _this = this;
  _this.foo = 'bar';
  SuperClass.call(_this, logger);
};
util.inherits(Module, SuperClass);

/**
 * Public Method
 */
Module.prototype.subClassFunc = function() {
  var _this = this;
  _this.logger.debug(PREFIX, 'Module.prototype.subClassFunc()');
  return 'Module.prototype.subClassFunc()';
};

Module.prototype.getPrivateObj = function() {
  var _this = this;
  _this.logger.debug(PREFIX, 'Module.prototype.getPrivateObj()', privateObj);
  return privateObj;
};

/**
 * Private method
 * @return {[type]} [description]
 */
var privateMethod = function() {
  logger.debug('Cannot direct call from Outside.');
};

/**
 * Private object
 */
var privateObj = {
  foo  : 'foofoo',
  bar  : 'barbar',
  num  : 123456
};

/**
 * Module wrapper for Node.js
 */
module.exports = {
  Module : Module
};
