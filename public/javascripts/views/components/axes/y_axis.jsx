namespace('Charts.Axes')

Charts.Axes.Y = React.createClass({

  mixins: [Charts.Mixins.Axes],

  transformAxis: function() {
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
