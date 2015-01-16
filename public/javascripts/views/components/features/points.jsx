namespace('Charts')

Charts.Points = React.createClass({
  render: function() {
    var dataset = this.props.dataset,
        xscale  = this.props.xscale,
        yscale  = this.props.yscale,
        series  = this.props.series

    return (
      <g className="points">
        {dataset.map(function(datum, index) {
          return (
            <circle className={series + ' point'}
                    cx={xscale(datum.x)}
                    cy={yscale(datum.y)}
                    r="10"
                    key={index}
                    data-index={index}
                    data-x={datum.x}
                    data-y={datum.y} />
          )
        })}
      </g>
    )
  }
})
