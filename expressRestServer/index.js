(function() {
  // Global
  var HTTP_PORT = 8080;

  /**
   * Load modules
   * Require following modules:
   * 	express (npm install express)
   * 	log4js (npm install log4js)
   */
  try {
    var express =       require('express');
    var EventEmitter =  require('events').EventEmitter;
    var logger =        require('log4js').getLogger();
    var morgan =        require('morgan');
    var bodyParser =    require('body-parser');
    var jsonParser =    bodyParser.json();
  } catch (err) {
    console.error('Modules load failed:', err);

    return false;
  }

  function main() {
    logger.info('main');
    var app = express();

    app.use(morgan('dev'));

    // Preprocess method
    app.use(function(req, res, next) {
      logger.debug('Preprocess', req.body, req.params);
      next();
    });

    // Set endpoint
    app.get('/', function(req, res) {
      res.send('Hello world!');
    });

    app.post('/user/:id', jsonParser, function(req, res) {
      logger.debug('/user/:id');

      logger.debug(req.body);
      res.send(req.body.foo);
    });

    app.post('/user/', function(req, res) {
      logger.debug('/user ... get all users');
      res.send('');
    });

    // Error handler
    app.use(function(err, req, res, next) {
      logger.error('REST server error : ', err);
      next();
    });

    var server = app.listen(3000, function() {
      // var host = server.address().address;
      var port = server.address().port;
      logger.info('REST server listen port %s', port);
    });

  }

  main();
})();
