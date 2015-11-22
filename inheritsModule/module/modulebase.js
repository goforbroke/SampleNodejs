/**
 * Super class module object
 */
var PREFIX = 'ModuleBase : ';
var util    = require('util');
var events  = require('EventEmitter');

/**
 * Constructor
 */
var ModuleBase = function(logger) {
  console.log(PREFIX, 'Constructor called.');
  if( !logger || logger.hasOwnProperty(logger) ) {
    throw new TypeError(PREFIX, 'log4js instance required.');
  }
  var _this = this;
  _this.logger = logger;
  events.EventEmitter.call(_this);
};
util.inherits(ModuleBase, events.EventEmitter);

/**
 * Method
 */
ModuleBase.prototype.func = function() {
  var _this = this;
  _this.logger.debug(PREFIX, 'func() called.');
  return 'ModuleBase.prototype.func()';
};

var privateFunc = function() {
  console.log('Cannot call form outside');
};

ModuleBase.prototype.echo = function(data) {
  var _this =this;
  _this.emit('someevent', PREFIX + data);
};

/**
 * Module wrapper for Node.js
 */
module.exports = {
  ModuleBase : ModuleBase
};
