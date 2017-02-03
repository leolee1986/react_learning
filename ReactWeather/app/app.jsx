var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// this syntx may look confusing, we can use the example below in the comment
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;
// var IndexRoute = require('react-router').IndexRoute;
// var hashHistory = require('react-router').hashHistory;


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
