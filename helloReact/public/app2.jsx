// mini challenge , create 2 component that nested under 1 contrainer component
// render on the page, when user update input, it updates screen, don't reflesh
// the page when submit clicked.

var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage2 = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>This name is from the greeter 2 props: {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

// greeterfrom 2
var GreeterForm2 = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    // create var to store the input data, be sure to use refs not just ref
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    // conditional statement to validate input is not empty
    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }

    if(message.length > 0){
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function(){
    return (
      // use ref that way the app can reference the data
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <textarea ref="message"></textarea>
        <button>Submit</button>
      </form>
    );
  }
});



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

var firstName = 'Leo';

ReactDOM.render(
  <Greeter2 name={firstName}/>,
  document.getElementById('app2')
);
