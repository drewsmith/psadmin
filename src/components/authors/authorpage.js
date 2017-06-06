"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorapi');
var AuthorList = require('./authorlist')

module.exports = class Authors extends React.Component {
  getInitialState() {
    return {
      authors: []
    }
  }

  componentDidMount() {
    if (this.isMounted()) {
      this.setState({
        authors: AuthorApi.getAllAuthors()
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
}