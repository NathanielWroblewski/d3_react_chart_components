namespace('Charts.Axes')

Charts.Axes.X = React.createClass({

  componentDidMount: function () {
    this.renderAxis()
  },

  scaledAxis: function() {
    return d3.svg.axis()
      .ticks(this.props.tickCount)
      .scale(this.props.scale)
      .orient('bottom')
  },

  renderAxis: function() {
    return d3.select(this.getDOMNode())
      .attr('transform', 'translate(0,' + (this.props.offset) + ')')
      .call(this.scaledAxis())
  },

  render: function() {
    return (<g className="x axis"></g>)
  }
})
