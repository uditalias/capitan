'use strict';

requirejs.config({
    baseUrl: 'scripts',
    paths: {
        initializer: './initializer/initializer',
        AppDispatcher: './appDispatcher/appDispatcher',
        jquery: '../lib/jquery/dist/jquery',
        underscore: '../lib/lodash/dist/lodash',
        backbone: '../lib/backbone/backbone',
        bootstrap: '../lib/react-bootstrap',
        Q: '../lib/q/q',
        moment: '../lib/momentjs/moment',
        socketio: '../lib/socket.io-client/socket.io',
        jsx: "../lib/require-jsx/jsx",
        JSXTransformer: '../lib/react/JSXTransformer',
        react: '../lib/react/react',
        EventEmitter: '../lib/eventEmitter/EventEmitter',
        Utils: './utils/utils',
        mixins: './utils/mixins',
        pnglib: '../lib/identicon.js/pnglib',
        Identicon: '../lib/identicon.js/identicon',
        MD5: '../lib/blueimp-md5/js/md5',
        pages: '../pages/',
        components: '../components/'
    },
    shim: {
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        },
        underscore: {
            deps: [],
            exports: '_'
        }
    }
});

require([ 'jsx!initializer', 'jquery' ], function(initializer) {

    initializer.initialize();

});