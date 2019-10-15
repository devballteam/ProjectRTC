/**
 * Module dependencies.
 */
var express = require('express')
,	fs = require('fs')
,	https = require('https')
,	path = require('path')
,	streams = require('./app/streams.js')();

var favicon = require('serve-favicon')
,	logger = require('morgan')
,	methodOverride = require('method-override')
,	bodyParser = require('body-parser')
,	errorHandler = require('errorhandler');

var key = fs.readFileSync(process.env.KEYPATH);
var cert = fs.readFileSync(process.env.CERTPATH);
var options = { key, cert };

if (!key || !cert) {
  throw new Error('.key and .crt files are required');
}

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// routing
require('./app/routes.js')(app, streams);

var httpsServer = https.createServer(options, app);

var io = require('socket.io').listen(httpsServer);
/**
 * Socket.io event handling
 */
require('./app/socketHandler.js')(io, streams);

httpsServer.listen(app.get('port'), function(){
  console.log('Express https server listening on port ' + (app.get('port')) );
});
