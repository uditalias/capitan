define(['react'], function(React) {

    var NotFound = React.createClass({
        render: function() {
            return (
                <div>
                    <div>
                        Page Not Found
                    </div>
                    <div>{this._getPageRoute()}</div>
                    <div><a href="#/">home</a></div>
                </div>
                );
        },

        _getPageRoute: function() {
            return location.hash;
        }
    });

    return NotFound;

});