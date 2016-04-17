var React = require('react');


var ConfirmBattle = function(props){
    return props.isLoading === true 
        ? <p> Loading! </p> 
        : <div> Confirm Battle: {puke(props)} </div>
};

var puke = function(object){
    return <pre> {JSON.stringify(object, null, '')}</pre>
}

module.exports = ConfirmBattle;