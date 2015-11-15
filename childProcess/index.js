(function() {
  var spawn = require('child_process').spawn;
  var ssh    = spawn('ssh', ['-i', 'aws-rico.pem', 'centos@52.69.88.85', 'sudo', 'pwd; ls -l'],
    {cwd :'/Users/koba/remote'});

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
