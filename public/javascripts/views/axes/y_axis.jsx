namespace('Charts.Axes')

Charts.Axes.Y = React.createClass({

  componentDidMount: function() {
    this.renderAxis()
  },

  scaledAxis: function() {
    return d3.svg.axis()
      .ticks(this.props.tickCount)
      .scale(this.props.scale)
      .orient('left')
  },

  renderAxis: function() {
    return d3.select(this.getDOMNode())
        .attr('transform', 'translate(' + this.props.offset + ',0)')
      .call(this.scaledAxis())
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text(this.props.label);
  },

  render: function() {
    return (<g className="y axis"></g>)
  }
})
