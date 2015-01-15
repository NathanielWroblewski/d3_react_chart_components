namespace('Charts.LineCharts')

Charts.LineCharts.TimeSeries = React.createClass({

    dimensions: function() {
      return ({
        top:    this.props.margins.top,
        right:  this.props.width - this.props.margins.right,
        bottom: this.props.height - this.props.margins.bottom,
        left:   this.props.margins.left
      })
    },

    xAxisDimensions: function() {
      return [this.dimensions().left, this.dimensions().right]
    },

    yAxisDimensions: function() {
      return ([this.dimensions().bottom, this.dimensions().top])
    },


  xscale: function() {
    return d3.time.scale().range(this.xAxisDimensions()).domain(
      d3.extent(this.formattedDataset(), function(datum) { return datum.x })
    );
  },

  yscale: function() {
    return d3.scale.linear().range(this.yAxisDimensions()).domain(
      d3.extent(this.formattedDataset(), function(datum) { return datum.y })
    );
  },

  formattedDataset: function() {
    return this.props.dataset.map(function(datum) {
      return {
        x: d3.time.format(this.props.timeFormat).parse(datum.x),
        y: +datum.y
      }
    }.bind(this));
  },

  render: function() {
    return (
      <svg height={this.props.height + 'px'} width={this.props.width + 'px'}>
        <Charts.Line xscale={this.xscale()}
                        yscale={this.yscale()}
                        dataset={this.formattedDataset()} />
        <Charts.Points xscale={this.xscale()}
                          yscale={this.yscale()}
                          dataset={this.formattedDataset()} />
        <Charts.Axes.X scale={this.xscale()}
                          offset={this.dimensions().bottom}
                          tickCount={this.props.xAxisTickCount}/>
        <Charts.Axes.Y scale={this.yscale()}
                          offset={this.dimensions().left}
                          label={this.props.ylabel}
                          tickCount={this.props.yAxisTickCount}/>
      </svg>
    )
  }
})
