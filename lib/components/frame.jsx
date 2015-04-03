var React = require('react');

var Frame = React.createClass({
  getInitialState: function () {
    return (
      {
        ballOne: this.props.ballOne || 0,
        ballTwo: this.props.ballTwo || 0,
        ballThree: this.props.ballThree || 0
      }
    )
  },

  render: function () {
    return (
      <div>
        <span>{this.props.frameNumber}</span>
        <input className="frame-input" type="text" maxLength="2" defaultValue={this.state.ballOne} />
        <input className="frame-input" type="text" maxLength="2" defaultValue={this.state.ballTwo} />
      </div>
    );
  }
});

module.exports = Frame;
