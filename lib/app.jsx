var React = require('react');
var Frame = require('./components/frame.jsx');
var Total = require('./components/total.jsx');

var App = React.createClass({
  getInitialState: function () {
    return (
      { total: 0 }
    )
  },

  updateTotal: function () {
    var total = this.refs.frameOne.state.ballOne + this.refs.frameOne.state.ballTwo +
      this.refs.frameTwo.state.ballOne + this.refs.frameTwo.state.ballTwo +
      this.refs.frameThree.state.ballOne + this.refs.frameThree.state.ballTwo +
      this.refs.frameFour.state.ballOne + this.refs.frameFour.state.ballTwo +
      this.refs.frameFive.state.ballOne + this.refs.frameFive.state.ballTwo +
      this.refs.frameSix.state.ballOne + this.refs.frameSix.state.ballTwo +
      this.refs.frameSeven.state.ballOne + this.refs.frameSeven.state.ballTwo +
      this.refs.frameEight.state.ballOne + this.refs.frameEight.state.ballTwo +
      this.refs.frameNine.state.ballOne + this.refs.frameNine.state.ballTwo +
      this.refs.frameTen.state.ballOne + this.refs.frameTen.state.ballTwo + this.refs.frameTen.state.ballThree;

    this.setState({ total: total });
  },

  render: function () {
    return (
      <div>
        <span>Bowl Score</span>
        <Frame frameNumber="1" ref="frameOne" updateTotal={this.updateTotal} />
        <Frame frameNumber="2" ref="frameTwo" updateTotal={this.updateTotal} />
        <Frame frameNumber="3" ref="frameThree" updateTotal={this.updateTotal} />
        <Frame frameNumber="4" ref="frameFour" updateTotal={this.updateTotal} />
        <Frame frameNumber="5" ref="frameFive" updateTotal={this.updateTotal} />
        <Frame frameNumber="6" ref="frameSix" updateTotal={this.updateTotal} />
        <Frame frameNumber="7" ref="frameSeven" updateTotal={this.updateTotal} />
        <Frame frameNumber="8" ref="frameEight" updateTotal={this.updateTotal} />
        <Frame frameNumber="9" ref="frameNine" updateTotal={this.updateTotal} />
        <Frame frameNumber="10" ref="frameTen" updateTotal={this.updateTotal} />
        <Total total={this.state.total} />
      </div>
    )
  }
});

React.render(
  <App />,
  document.body
);
