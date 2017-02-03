var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
