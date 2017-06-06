$ = jQuery = require('jQuery');

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;

ReactDOM.render((
  <Router>
    <Route component={require('./components/App')} >
      <Route path="/" component={require('./components/about/aboutpage')} />
      <Route path="authors" component={require('./components/authors/authorpage')} />
    </Route>
  </Router>
), document.getElementById('app'));