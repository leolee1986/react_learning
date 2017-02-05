var React = require('react');
var WeatherMessage = React.createClass({

  render: function(){
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <div>
        <h3>The Location: {location}</h3>
        <h3>The Temp: {temp}</h3>
      </div>

    );
  }
});

module.exports = WeatherMessage;
