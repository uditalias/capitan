define(['AppDispatcher', 'constants/CLIENT_ACTION_TYPE'], function(AppDispatcher, CLIENT_ACTION_TYPE) {

    var ClientActions = {
        routeChanged: function(route) {
            AppDispatcher.dispatchClientAction({
                actionType: CLIENT_ACTION_TYPE.ROUTE_CHANGED,
                route: route
            });
        },

        navigate: function(routeName) {
            AppDispatcher.dispatchClientAction({
                actionType: CLIENT_ACTION_TYPE.NAVIGATE,
                routeName: routeName
            });
        }
    };

    return ClientActions;
});