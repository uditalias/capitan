'use strict';

define([
        'backbone',
        'constants/ROUTES',
        'actions/client'
    ],
    function(Backbone, ROUTES, clientActions){

        var Router = Backbone.Router.extend({
            initialize: function() {
                Backbone.history.start()
            },
            routes: {
                '': 'home',
                'login': 'login',
                '*notFound': 'notFound'
            },

            home: function() {
                clientActions.routeChanged(ROUTES.HOME);
            },

            login: function() {
                clientActions.routeChanged(ROUTES.LOGIN);
            },

            notFound: function() {
                clientActions.routeChanged(ROUTES.NOT_FOUND);
            }
        });

        return Router;
    });