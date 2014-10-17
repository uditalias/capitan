"use strict";

var appolo = require('appolo-express'),
    socket = require('./socket.io/socket.io');

appolo.module.register(socket());