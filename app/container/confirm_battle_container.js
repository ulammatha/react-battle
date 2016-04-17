var React = require('react');
var ConfirmBattle = require('../components/confirm_battle');
var git_hub = require('../utils/git_hub_helper');

var ConfirmBattleContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentDidMount: function(){
        var query = this.props.location.query;
        git_hub.get_git_user_data([query.playerOne, query.playerTwo])
            .then(function(result){
                console.log(result);
                this.setState({
                    isLoading: false,
                    playersInfo: [result[0], result[1]]
                })
        }.bind(this))
    },
    render: function(){
        return(
            <ConfirmBattle isLoading= {this.state.isLoading} playersInfo= { this.state.playersInfo }/>
        )
    }
});

module.exports = ConfirmBattleContainer;

