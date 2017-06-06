"use strict";

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

module.exports = class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}