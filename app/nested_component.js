//var React = require('react');
//var ReactDom = require('react-dom');
//
//var ParentComponent = React.createClass({
//    render: function(){
//        var colors = ['red', 'blue', 'green', 'orange'];
//        return (
//            <div>
//                <h1> This is Nested Component Example</h1>
//                <hr/>
//                <h3>Parent Component </h3>
//                <h4>{this.props.title} </h4>
//                <ChildComponent colors={colors} />
//            </div>
//        )
//    }
//});
//
//
//var ChildComponent = React.createClass({
//    render: function(){
//       var listItems = this.props.colors.map(function(color){
//        return <li> { color }</li>;
//    }); 
//    return (
//        <div>
//            <h3>Child Component</h3>
//            <ul>{listItems}</ul>
//        </div>
//    )
//    }
//});
//        
//ReactDom.render(<ParentComponent title='Colors' />, document.getElementById('app'));