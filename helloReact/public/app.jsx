
// 1st react component, create a var, use React.createClass(), inside it require render method.
// getDefaultProps to set default props in case no data pass in
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from the message props'
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
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
