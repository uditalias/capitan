'use strict';

define([
        'react',
        'stores/viewsStore',
        'jsx!components/header/Header',
        'jsx!components/footer/Footer'
    ],
    function(React, viewsStore, Header, Footer) {

        function getAppState() {
            return {

            }
        }

        var CapitanLayout = React.createClass({
            getInitialState: function() {

                return getAppState();

            },

            componentDidMount: function() {

                viewsStore.addChangeListener(this._onChange);

            },

            componentWillUnmount: function() {

                viewsStore.removeChangeListener(this._onChange);

            },

            render: function() {
                return (
                    <div className="capitan flex flex-vbox height-max">
                        <Header />
                        {this._getRouteView()}
                        <Footer />
                    </div>
                    );
            },

            _onChange: function() {

                this.setState(getAppState());

            },

            _getRouteView: function() {

                return viewsStore.getView();

            }
        });

        return CapitanLayout;
    });