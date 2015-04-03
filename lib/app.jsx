var React = require('react');
var Frame = require('./components/frame.jsx');
var Total = require('./components/total.jsx');

var App = React.createClass({
  getInitialState: function () {
    return (
      { total: 0 }
    )
  },

  render: function () {
    return (
      <div>
        <span>Bowl Score</span>
        <Frame frameNumber="1"/>
        <Frame frameNumber="2"/>
        <Frame frameNumber="3"/>
        <Frame frameNumber="4"/>
        <Frame frameNumber="5"/>
        <Frame frameNumber="6"/>
        <Frame frameNumber="7"/>
        <Frame frameNumber="8"/>
        <Frame frameNumber="9"/>
        <Frame frameNumber="10"/>
        <Total total={this.state.total} />
      </div>
    )
  }
});

React.render(
  <App />,
  document.body
);
