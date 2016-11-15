var express = require('express');
var http = require('http');
var config = require('./config.js');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var server = http.createServer(app);

app.use('/', express.static('/'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/lib')));
app.use(express.static(path.join(__dirname, '/src')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname)));

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve('./src/index.html'));
// });
// app.get('/built/styles.css', function(req, res) {
//   res.sendFile(path.resolve('built/styles.css'));
// });
// app.get('built/system-config.js', function(req, res) {
//   res.sendFile(path.resolve('built/system-config.js'));
// });
//
// app.get('*', function(req, res) {
//   res.sendfile('./src/index.html')
// });

//continuous run on port 8080
server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
  var open = require('open');
  //open('http:/localhost:' + config.server.listenPort + '/');
})
console.log('Angular App Server - listening on port: ' + config.server.listenPort);
