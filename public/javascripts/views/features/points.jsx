namespace('Charts')

Charts.Points = React.createClass({
  render: function() {
    var dataset = this.props.dataset,
        xscale  = this.props.xscale,
        yscale  = this.props.yscale

    return (
      <g>
        {dataset.map(function(datum) {
          return <circle className="point"
                         cx={xscale(datum.x)}
                         cy={yscale(datum.y)}
                         r="10" />
        })}
      </g>
    )
  }
})
