/**
 * This program implements for following module inheritance.
 * Module -> ModuleBase -> EventEmitter
 *
 * Install:
 * 	npm install
 *
 * Execute:
 * 	node main.js
 */
(function() {
  var logger    = require('log4js').getLogger();
  var util      = require('util');

  var myModule  = require('./module/index.js');

  logger.info('Call super class object func');
  var SuperClass    = myModule.ModuleBase;
  var superClassObj = new SuperClass(logger);
  logger.info(superClassObj.func());

  logger.info('Call sub class object func');
  var SubClass    =  myModule.Module;
  var subClassObj = new SubClass(logger);
  logger.info(subClassObj.func());
  logger.info(subClassObj.subClassFunc());

  logger.info('EventEmitter implements');
  // Event emits by super class object(ModuleBase)
  superClassObj.on('someevent', function(data) {
    logger.info('Received on main.js : ', data);
  });
  superClassObj.echo('superClassObj');

  // Event emits by sub class object(Module)
  subClassObj.on('someevent', function(data) {
    logger.info('Received on main.js : ', data);
  });
  subClassObj.echo('subClassObj');
})();
