namespace('Charts')

Charts.Points = React.createClass({
  render: function() {
    var dataset = this.props.dataset,
        xscale  = this.props.xscale,
        yscale  = this.props.yscale,
        series  = this.props.series

    return (
      <g className="points">
        {dataset.map(function(datum) {
          return <circle className={series + ' point'}
                         cx={xscale(datum.x)}
                         cy={yscale(datum.y)}
                         r="10" />
        })}
      </g>
    )
  }
})
