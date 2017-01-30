var React = require('react');
var GreeterMessage2 = require('./GreeterMessage2.jsx');
var GreeterForm2 = require('./GreeterForm2.jsx');

var Greeter2 = React.createClass({
  // Default message when start up
  getDefaultProps: function(){
    return {
      name: 'Greeter2',
      message: 'This is from the message props --- Greeter2'
    };
  },
  // set initial state
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  // set new name state when user submit form
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  // set new message state when user submit form
  handleNewMessage: function(message){
    this.setState({
      message : message
    });
  },
  render: function() {
     var name = this.state.name;
     var message = this.state.message;
     // render the data
    return (
      <div>
        <GreeterMessage2 name={name} message={message}/>
        <GreeterForm2 onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});


module.exports = Greeter2;
