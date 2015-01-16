namespace('Charts.LineCharts')

Charts.LineCharts.LineChart = React.createClass({

  mixins: [Charts.Mixins.LineChart],

  baseXScale: function() {
    return d3.scale.linear()
  },

  baseYScale: function() {
    return d3.scale.linear()
  },

  xFormat: function(datum) {
    return +datum
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
