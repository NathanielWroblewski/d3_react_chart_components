namespace('Charts.Axes')

Charts.Axes.Y = React.createClass({

  mixins: [Charts.Mixins.Axes],

  transformAxis: function() {
    return d3.select(this.getDOMNode()).call(this.scaledAxis())
  },

  render: function() {
    var offset = this.props.offset,
        style  = {textAnchor: 'end'}

    return (
      <g className="y axis" transform={"translate(" + offset + ",0)"}>
        <text transform="rotate(-90)" y="6" dy="0.71em" x={-offset} style={style} >
          {this.props.label}
        </text>
      </g>
    )
  }
})
