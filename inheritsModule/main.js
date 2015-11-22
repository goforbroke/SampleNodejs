/**
 * This program implements for following module inheritance.
 * Module -> ModuleBase
 * Install:
 * 	npm install log4js
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
})();
