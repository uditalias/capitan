'use strict';

define(['react', 'actions/client'], function(React, clientActions) {

    var HomePage = React.createClass({
        render: function() {
            return <div className="flex-1 flex flex-vbox flex-align-center flex-pack-center height-max home-container">
                <div style={ { height: '180px' } }>
                    <img src="/assets/images/capitan.png" className="height-max" />
                </div>
                <div>
                    <h1 className="text-center w100 text-90 margin-0 color-white">capitan</h1>
                </div>
                <div className="text-24 w100 color-warm-gray margin-top-15">
                Navigate in seas of requests and responses
                </div>

                <div className="flex flex-pack-center margin-top-50">
                    <button className="btn  margin-right-20" onClick={this._login}>
                        <div className="text-14 w300 padding-left-20 padding-right-20">login</div>
                    </button>
                    <button className="btn" onClick={this._signup}>
                        <div className="text-14 w300 padding-left-20 padding-right-20">signup</div>
                    </button>
                </div>

            </div>;
        },

        _login: function() {
            clientActions.navigate('login');
        },

        _signup: function() {
            clientActions.navigate('signup');
        }
    });

    return HomePage;

});