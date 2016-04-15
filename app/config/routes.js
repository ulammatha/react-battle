var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/main');
//var Home = require('../components/home');
var UserAccount =require('../container/user_account');


var routes  = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}> 
            <Route path='playerOne' header='Player One' component={UserAccount} />
            <Route path='playerTwo/:key' header='Player Two' component={UserAccount} />
        </Route>
    </Router>
);

module.exports = routes;