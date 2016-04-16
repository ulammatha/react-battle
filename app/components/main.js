
var React = require('react');


// state less component ( doesn't have any state (getInitialState) declaration )
var main = React.createClass({
    render: function(){
        return (
            <div> 
                Hello from Main component
                { this.props.children }
            </div>
        )
    }
});


module.exports = main;