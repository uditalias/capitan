define([
        'EventEmitter',
        'constants/ROUTES',
        'definitions/Router',
        'jsx!pages/home/HomePage',
        'jsx!pages/login/LoginPage'
    ],

    function(EventEmitter, ROUTES, Router, HomePage, LoginPage) {

        var CHANGE_EVENT = 'change';

        function ViewsStore() {
            this.super = EventEmitter;
            this.super();

            this._currentView = null;

            setTimeout(function() {
                this._router = new Router();
            }.bind(this), 0);
        }

        ViewsStore.prototype = new EventEmitter;

        ViewsStore.prototype.setViewByRoute = function(route) {

            if(route) {
                switch(route) {
                    case ROUTES.HOME:
                        this.setView(new HomePage());
                        break;
                    case ROUTES.LOGIN:
                        this.setView(new LoginPage());
                        break;
                    case ROUTES.NOT_FOUND:
                        this._currentView = null;
                        break;
                }
            }

        };

        ViewsStore.prototype.navigate = function(routeName) {
            this._router.navigate(routeName);
        };

        ViewsStore.prototype.setView = function(view) {
            this._currentView = view;
        };

        ViewsStore.prototype.getView = function() {
            return this._currentView;
        };

        ViewsStore.prototype.emitChange = function() {
            this.emitEvent(CHANGE_EVENT);
        };

        ViewsStore.prototype.addChangeListener = function(callback) {
            this.on(CHANGE_EVENT, callback);
        };

        ViewsStore.prototype.removeChangeListener = function(callback) {
            this.off(CHANGE_EVENT, callback);
        };

        return ViewsStore;
    });