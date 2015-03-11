'use strict';

var Board = require('./lib/board');

function arduinoserial(app, opts, cb){

  var namespace = opts.namespace || 'arduinoserial';

  var board = new Board();

  app.expose(namespace, board);

  cb();
}

module.exports = arduinoserial;
