namespace('Charts.LineCharts')

Charts.LineCharts.TimeSeries = React.createClass({

  mixins: [Charts.Mixins.LineChart],

  baseXScale: function() {
    return d3.time.scale()
  },

  baseYScale: function() {
    return d3.scale.linear()
  },

  xFormat: function(datum) {
    return d3.time.format(this.props.timeFormat).parse(datum)
  },

  yFormat: function(datum) {
    return +datum
  },

  render: function() {
    return (
      <svg height={this.props.height + 'px'} width={this.props.width + 'px'}>
        { this.renderThreshold() }
        { this.renderLines() }
        { this.renderPoints() }
        { this.renderAxes() }
      </svg>
    )
  }
})
