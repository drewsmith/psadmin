"use strict";

var React = require('react');

module.exports = class AuthorList extends React.Component {
  render() {
    function createAuthorRow(author) {
      return (
        <tr key={author.id}>
          <td>{author.id}</td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    }

    return (
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
}