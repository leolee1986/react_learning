var React = require('react');

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

module.exports = GreeterForm2;
