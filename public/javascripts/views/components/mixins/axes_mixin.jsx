namespace('Charts.Mixins')

Charts.Mixins.Axes = {

  componentDidMount: function() {
    this.transformAxis()
  },

  scaledAxis: function() {
    return d3.svg.axis()
      .ticks(this.props.tickCount)
      .scale(this.props.scale)
      .orient(this.props.orientation)
  }
}

