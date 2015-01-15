namespace('Charts')

Charts.Line = React.createClass({

  scaledLine: function() {
    var path = d3.svg.line()
      .x(function(datum) { return this.props.xscale(datum.x) }.bind(this))
      .y(function(datum) { return this.props.yscale(datum.y) }.bind(this))
      .interpolate('linear')

    return path(this.props.dataset)
  },

  render: function() {
    return (<path className="line" d={this.scaledLine()} />)
  }
})
