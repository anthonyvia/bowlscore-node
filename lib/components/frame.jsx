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

  getBallValue: function (ball) {
    var value = React.findDOMNode(ball).value;

    if (value === undefined || value === "") {
      value = 0;
    }

    return value;
  },

  handleChange: function (ballNum) {
    if (ballNum === undefined) {
      return;
    }

    if (ballNum === "1") {
      this.setState({ ballOne: this.getBallValue(this.refs.ballOne) });
    } else if (ballNum === "2") {
      this.setState({ ballTwo: this.getBallValue(this.refs.ballTwo) });
    } else if (ballNum === "3") {
      this.setState({ ballThree: this.getBallValue(this.refs.ballThree )});
    }
  },

  /*
   * Required to avoid an infinite loop. On a ball change, componentDidUpdate eventually gets called,
   * which eventually changes the state of the parent component (total score),
   * which then causes an update of the parent's elements, which then triggers
   * componentDidUpdate eventually again.
   */
  shouldComponentUpdate: function (nextProps, nextState) {
    if (this.state.ballOne !== nextState.ballOne || this.state.ballTwo !== nextState.ballTwo || this.state.ballThree !== nextState.ballThree) {
      return true;
    }

    return false;
  },

  componentDidUpdate: function () {
    this.props.updateTotal();
  },

  render: function () {
    return (
      <div>
        <span>{this.props.frameNumber}</span>
        <input className="frame-input" type="text" maxLength="2" defaultValue={this.state.ballOne} ref="ballOne" onChange={this.handleChange.bind(null, "1")}/>
        <input className="frame-input" type="text" maxLength="2" defaultValue={this.state.ballTwo} ref="ballTwo" onChange={this.handleChange.bind(null, "2")}/>
      </div>
    );
  }
});

module.exports = Frame;
