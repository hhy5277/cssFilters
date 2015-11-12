var React = require('React');
var Color = require('./Color.jsx');

var Background = React.createClass({
  displayName: 'Background',

  getInitialState: function () {
    return {
      background: 'solid'
    };
  },

  onBackgroundChanged: function (event) {
    this.setState({
      background: event.currentTarget.value
    });
  },

  render: function() {
    return (
      <div>

        <fieldset className="radio-group">
          <input id="r1" type="radio" name="background" value="solid" className="radio" checked={this.state.background === 'solid'} onChange={this.onBackgroundChanged} />
          <label className="radio-label" htmlFor="r1"><i></i>Solid Background</label>
          <input id="r2" type="radio" name="background" value="linear" className="radio" checked={this.state.background === 'linear'} onChange={this.onBackgroundChanged} />
          <label className="radio-label" htmlFor="r2"><i></i>Linear Gradient</label>
          <input id="r3" type="radio" name="background" value="radial" className="radio" checked={this.state.background === 'radial'} onChange={this.onBackgroundChanged} />
          <label className="radio-label" htmlFor="r3"><i></i>Radial Gradient</label>
        </fieldset>

        <div className="color-cont">
          <Color />
        </div>
      </div>
    );
  }
});

module.exports = Background;