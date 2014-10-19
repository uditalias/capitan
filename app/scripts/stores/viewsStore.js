define([
        'AppDispatcher',
        'definitions/ViewsStore',
        'constants/ACTION_SOURCE',
        'constants/SERVER_ACTION_TYPE',
        'constants/CLIENT_ACTION_TYPE'
    ],

    function(AppDispatcher, ViewsStore, ACTION_SOURCE, SERVER_ACTION_TYPE, CLIENT_ACTION_TYPE) {

        var viewsStore = new ViewsStore();

        function _handleServerAction(data) {

            var action = data.action;
            var emitChange = false;

            switch(action.actionType) {
            }

            return emitChange;
        }

        function _handleClientAction(data) {

            var action = data.action;
            var emitChange = false;

            switch(action.actionType) {

                case CLIENT_ACTION_TYPE.ROUTE_CHANGED:

                    viewsStore.setViewByRoute(action.route);

                    emitChange = true;

                    break;

                case CLIENT_ACTION_TYPE.NAVIGATE:

                    viewsStore.navigate(action.routeName);

                    emitChange = true;

                    break;
            }

            return emitChange;
        }

        AppDispatcher.register(function(data) {

            var emitChangeEvent = false;

            if(data.source == ACTION_SOURCE.SERVER_ACTION) {

                emitChangeEvent = _handleServerAction(data);

            } else if(data.source == ACTION_SOURCE.CLIENT_ACTION) {

                emitChangeEvent = _handleClientAction(data);

            }

            if(emitChangeEvent) {
                viewsStore.emitChange();
            }

        });

        return viewsStore;
    });