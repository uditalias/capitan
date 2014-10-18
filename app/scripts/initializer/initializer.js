define(
    [
        'react',
        'jsx!pages/capitanLayout/CapitanLayout'
    ],

    function(React, CapitanLayout) {

        function _initialize() {

            $(function() {

                React.renderComponent(<CapitanLayout />, $('.app-container')[0]);

            });

        }

        return {
            initialize: _initialize
        }
    });