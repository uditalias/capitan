var appolo  = require('appolo-express'),
    sio     = require('socket.io');

module.exports = function (options) {

    return function (env, inject, app, callback) {

        var io = sio.listen(app.server);

        inject.addObject('io', io);

        callback();
    }
};