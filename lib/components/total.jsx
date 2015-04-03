var React = require('react');

var Total = React.createClass({
  render: function () {
    return (
      <div>
        Total: <span>{this.props.total}</span>
      </div>
    )
  }
});

module.exports = Total;
