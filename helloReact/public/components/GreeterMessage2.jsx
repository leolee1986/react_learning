var React = require('react');

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

module.exports = GreeterMessage2;
