var React = require('react');
var ReactDom = require('react-dom');
var Routes = require('./config/routes');

ReactDom.render(
    Routes,
    document.getElementById('app')
)