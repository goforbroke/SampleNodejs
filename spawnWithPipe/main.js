(function() {
  var net       = require('net');
  var spawn     = require('child_process').spawn;
  var sendData    = {
    foo   : 'var',
    bar   : 1,
    hoge  : true
  };

  var childOptions = { stdio : [null, null, null, 'pipe'] };
  var callee  = spawn( 'node', ['./callee.js', JSON.stringify(sendData)],
    childOptions );

  callee.stdio[3].on('data', function(buf) {
    console.log('pipe:', buf.toString('utf8'));
  });

  callee.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString('utf8'));
  });

  callee.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString('utf8'));
  });

  callee.on('close', function (code) {
    console.log('ok : child process exited with code ' + code);
  });
})();
