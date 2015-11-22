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
  SuperClass.call(_this, logger);
};
util.inherits(Module, SuperClass);

/**
 * Method
 */
Module.prototype.subClassFunc = function() {
  var _this = this;
  _this.logger.debug(PREFIX, 'Module.prototype.subClassFunc()');
  return 'Module.prototype.subClassFunc()';
};

/**
 * Module wrapper for Node.js
 */
module.exports = {
  Module : Module
};
