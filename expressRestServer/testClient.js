var http = require('http');
setInterval(reqRoot, 100);

function reqRoot() {
  http.get('http://localhost:3000/', function(res) {
    console.log('Got response', res.statusCode)
    
    res.on('data', function(chunk) {
      //console.log('chunk: ', chunk);
    });

    res.on('end', function() {
      //console.log('end');
    });
  }).on('error', function(e) {
    console.log('Got error : ', e+message);
  });
}
