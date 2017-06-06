"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./components/App')}>
    <DefaultRoute handler={require('./components/about/aboutpage')} />
    <Route name="authors" handler={require('./components/authors/authorpage')} />
  </Route>
);

module.exports = routes;