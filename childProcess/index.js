/**
 * Fork chilid process sample
 */
(function() {
  var spawn = require('child_process').spawn;
  var ok    = spawn('bash', ['ok.sh'], {cwd :'/tmp'});
  var ng    = spawn('bash', ['ng.sh'], {cwd :'/tmp'});

  // "ok.sh" returns 0
  ok.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  ok.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  ok.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

  // ng.sh returns 1
  ng.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  ng.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  ng.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });

})();
