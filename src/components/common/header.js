"use strict";

var React = require('react');

module.exports = class Home extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Site Title
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}