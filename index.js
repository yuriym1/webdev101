var express = require('express');
var server  = express();

server.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000, function() {
  console.log('Server is running');
});
