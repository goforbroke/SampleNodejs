(function() {
  var util = require('util');
  var net = require('net');
  console.log('./dir/callee.js called');

  console.log('argv input: ', process.argv[2]);
  var pipe = new net.Socket({ fd: 3 });
  pipe.end(Buffer('foo'));
  process.stderr.write('bar');
})();
