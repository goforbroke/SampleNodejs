/**
 * Sub class module object(modulebase.js)
 */
var PREFIX  = 'Module : ';
var util    = require('util');

// Load super class from module
var SuperClass  = require('./modulebase.js').ModuleBase;

/**
 * Constructor
 */
var Module = function(logger) {
  var _this = this;
  console.log(PREFIX, 'Constructor called.');
  SuperClass.call(_this, logger);
};
util.inherits(Module, SuperClass);

/**
 * Method
 */
Module.prototype.subClassFunc = function() {
  var self = this;
  self.logger.debug(PREFIX, 'Module.prototype.subClassFunc()');
  return 'Module.prototype.subClassFunc()';
};

/**
 * Module wrapper for Node.js
 */
module.exports = {
  Module : Module
};
