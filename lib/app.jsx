var React = require('react');
var superagent = require('superagent');
var Frame = require('./components/frame.jsx');
var Total = require('./components/total.jsx');

var App = React.createClass({
  getInitialState: function () {
    return (
      { total: 0 }
    )
  },

  updateTotal: function () {
    var self = this;
    var frames = [
      { ballOne: this.refs.frameOne.state.ballOne, ballTwo: this.refs.frameOne.state.ballTwo },
      { ballOne: this.refs.frameTwo.state.ballOne, ballTwo: this.refs.frameTwo.state.ballTwo },
      { ballOne: this.refs.frameThree.state.ballOne, ballTwo: this.refs.frameThree.state.ballTwo },
      { ballOne: this.refs.frameFour.state.ballOne, ballTwo: this.refs.frameFour.state.ballTwo },
      { ballOne: this.refs.frameFive.state.ballOne, ballTwo: this.refs.frameFive.state.ballTwo },
      { ballOne: this.refs.frameSix.state.ballOne, ballTwo: this.refs.frameSix.state.ballTwo },
      { ballOne: this.refs.frameSeven.state.ballOne, ballTwo: this.refs.frameSeven.state.ballTwo },
      { ballOne: this.refs.frameEight.state.ballOne, ballTwo: this.refs.frameEight.state.ballTwo },
      { ballOne: this.refs.frameNine.state.ballOne, ballTwo: this.refs.frameNine.state.ballTwo },
      { ballOne: this.refs.frameTen.state.ballOne, ballTwo: this.refs.frameTen.state.ballTwo, ballThree: this.refs.frameTen.state.ballThree }
    ];

    superagent
      .post('/api/score')
      .send({ frames: frames })
      .end(function (error, response) {
        if (error) {
          console.log('error getting score');
          console.log(error);
        }

        self.setState({ total: response.body.score });
      });
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
