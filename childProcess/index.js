/**
 * 子プロセスを起動するスクリプト
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {
  var spawn = require('child_process').spawn;
  var ssh    = spawn('ssh', ['localhost', 'pwd; ls -l'],
    {cwd :'/tmp'});

  ssh.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  ssh.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  ssh.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });
})();
