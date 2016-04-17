var React = require('react');
var Prompt = require('../components/prompt');


// State component and its a container( means only business logic )
var userAccount = React.createClass({
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
        });
        if(this.props.routeParams.key){
             this.context.router.push({
                 pathname: '/battle',
                 query: { 
                     playerOne: this.props.routeParams.key,
                     playerTwo: this.state.userName
                 }
             })
        } else {
             this.context.router.push('/playertwo/' + this.state.userName)
        }
    },
    
    render: function(){
        return (
            <div>
                <Prompt 
                    header = {this.props.route.header}
                    onSubmitUser = { this.handleSubmitUser }
                    onUpdateUser = { this.handleUpdateUser }
                    userName = { this.state.userName } 
                />
            </div>
        )
    }
});

module.exports = userAccount;
        
        