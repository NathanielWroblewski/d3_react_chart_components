namespace('Charts.Axes')

Charts.Axes.X = React.createClass({

  mixins: [Charts.Mixins.Axes],

  transformAxis: function() {
    return d3.select(this.getDOMNode())
      .attr('transform', 'translate(0,' + (this.props.offset) + ')')
      .call(this.scaledAxis())
  },

  render: function() {
    return <g className="x axis"></g>
  }
})
