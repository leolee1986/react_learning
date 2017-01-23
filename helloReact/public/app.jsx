// to nest this componet, just reference it with <GreeterMessage/>
// we want to make react componet is responsible for one thing and one thing only
var GreeterMessage = React.createClass({

  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

// new componet for GreeterForm
var GreeterForm = React.createClass({
  onFormSubmit : function(e){
    // prevent the browser from refleshing on click(is the browser default behavior)
    e.preventDefault();

    var name = this.refs.name.value;

    if(name.length >0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <button>Set name</button>
      </form>
    );
  }
});



// 1st react component, create a var, use React.createClass(), inside it require render method.
// getDefaultProps to set default props in case no data pass in
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the message props'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name){
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>

        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

var firstName = 'Leo';

ReactDOM.render(
    // jsx code, render the Greeter from above
    <Greeter name={firstName}/>,
    document.getElementById('app')
  );
