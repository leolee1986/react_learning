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

    var name = this.refs.name.value;
    var message = this.refs.message.value;

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
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <textarea ref="message"></textarea>
        <button>Submit</button>
      </form>
    );
  }
});



var Greeter2 = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Greeter2',
      message: 'This is from the message props --- Greeter2'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message){
    this.setState({
      message : message
    });
  },
  render: function() {
     var name = this.state.name;
     var message = this.state.message;
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
