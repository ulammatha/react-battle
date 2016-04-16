var React = require('react');
var Prompt = require('../components/prompt');

var userAccount = React.createClass({
    render: function(){
        if(this.props.routeParams.key){
            return( 
                <div>
                    <PromptContainer header={this.props.route.header} isPlayerTwo= { true }/>
                </div>
            )
        }
        else {
             return( 
                <div>
                    <PromptContainer header={this.props.route.header} isPlayerTwo= { false }/>
                </div>
            )
        }
    }
});


var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
      return {
       userName: ''
      };
    }, 
    
    handleUpdateUser: function(e){
        this.setState({
          userName: e.target.value
        });
    },
                            
    handleSubmitUser: function(){
        this.setState({
            userName: ''
        })
        this.setState.userName = '';
        if(this.props.isPlayerTwo === true){
             this.context.router.push('/battle')
        } else {
             this.context.router.push('/playertwo/' + this.state.userName)
        }
    },
                               
    render: function(){
        return (<Prompt 
            header = {this.props.header}
            onSubmitUser = { this.handleSubmitUser }
            onUpdateUser = { this.handleUpdateUser }
            userName = { this.state.userName }
        />)
    }
});

module.exports = userAccount;
        
        