namespace('Charts.Axes')

Charts.Axes.X = React.createClass({

  mixins: [Charts.Mixins.Axes],

  transformAxis: function() {
    return d3.select(this.getDOMNode()).call(this.scaledAxis())
  },

  render: function() {
    var offset = this.props.offset,
        style  = {textAnchor: 'end'}

    return (
      <g className="x axis" transform={'translate(0,' + (offset) + ')'}>
        <text dy="-0.71em" x={this.props.labelOffset} style={style} >
          {this.props.label}
        </text>
      </g>
    )
  }
})
