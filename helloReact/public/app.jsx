
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
  onButtonClick: function (e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if(typeof name === 'string' && name.length >0) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
