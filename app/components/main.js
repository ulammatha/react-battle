
var React = require('react');


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