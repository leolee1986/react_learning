// mini challenge , create 2 component that nested under 1 contrainer component
// render on the page, when user update input, it updates screen, don't reflesh
// the page when submit clicked.

var React = require('react');
var ReactDOM = require('react-dom');

var Greeter2 = require('./components/Greeter2.jsx');

var firstName = 'Leo Li';

ReactDOM.render(
  <Greeter2 name={firstName}/>,
  document.getElementById('app2')
);
