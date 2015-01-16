namespace('Charts.Mixins')

Charts.Mixins.LineChart = {

  getDefaultProps: function() {
    return {
      datasets:       {dataset: []},
      height:         400,
      width:          400,
      ylabel:         '',
      xlabel:         '',
      margins:        {top: 20, left: 20, right: 20, bottom: 20},
      xAxisTickCount: 0,
      yAxisTickCount: 0,
      onMouseEnter:   function() {},
      onMouseLeave:   function() {},
      onMouseClick:   function() {}
    }
  },

  componentDidMount: function() {
    this.setListeners()
  },

  setListeners: function() {
    var props = this.props

    d3.selectAll('.point').on('mouseenter', props.onMouseEnter)
                          .on('mouseleave', props.onMouseLeave)
                          .on('click', props.onMouseClick)
  },

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
    return this.baseXScale().range(this.xAxisDimensions()).domain(
      d3.extent(this.formatDataset(this.combinedDataset()), function(datum) {
        return datum.x
      })
    );
  },

  yscale: function() {
    return this.baseYScale().range(this.yAxisDimensions()).domain(
      d3.extent(this.formatDataset(this.combinedDataset()), function(datum) {
        return datum.y
      })
    );
  },

  formatDataset: function(dataset) {
    return dataset.map(function(datum) {
      return { x: this.xFormat(datum.x), y: this.yFormat(datum.y) }
    }.bind(this));
  },

  combinedDataset: function() {
    return d3.merge(d3.values(this.props.datasets))
  },

  renderPoints: function() {
    return d3.keys(this.props.datasets).map(function(series, index) {
      return (
        <Charts.Points xscale={this.xscale()}
                       yscale={this.yscale()}
                       dataset={this.formatDataset(this.props.datasets[series])}
                       series={series}
                       key={index} />
      )
    }.bind(this))
  },

  renderLines: function() {
    return d3.keys(this.props.datasets).map(function(series, index) {
      return (
        <Charts.Line xscale={this.xscale()}
                     yscale={this.yscale()}
                     dataset={this.formatDataset(this.props.datasets[series])}
                     series={series}
                     key={index} />
      )
    }.bind(this))
  },

  renderAxes: function() {
    return (
      <g className="axes">
        <Charts.Axes.X scale={this.xscale()}
                       offset={this.dimensions().bottom}
                       label={this.props.xlabel}
                       labelOffset={this.dimensions()['right']}
                       tickCount={this.props.xAxisTickCount}
                       orientation="bottom" />
        <Charts.Axes.Y scale={this.yscale()}
                       offset={this.dimensions().left}
                       label={this.props.ylabel}
                       tickCount={this.props.yAxisTickCount}
                       orientation="left" />
      </g>
    )
  }
}
