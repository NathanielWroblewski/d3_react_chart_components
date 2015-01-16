namespace('Charts')

Charts.Threshold = React.createClass({
  imageHeight: 150,
  imageWidth: 150,
  imagePath: '/public/images/greylines.png',
  template: [],

  renderImage: function(x, y) {
    var html = "<image id='img1' width='" + this.imageWidth +
               "' height='" + this.imageHeight +
               "' fill='#90' xlink:href='" + this.imagePath +
               "' x='" + x + "' y='" + y + "' />"

    this.template.push(
      <g dangerouslySetInnerHTML={{__html: html}} />
    )
  },

  render: function() {
    this.template = []

    var value    = this.props.value,
        width    = this.props.width,
        height   = this.props.height

    for (var y = value - this.imageHeight; y > -this.imageHeight; y -= this.imageHeight - 5) {
      for (var x = 0; x < width + this.imageWidth; x += this.imageWidth - 5) {
        this.renderImage(x, y)
      }
    }

    return (
      <g className="threshold">
        {this.template}
        <line x1="0" x2="800" y1={value} y2={value}/>
      </g>
    )
  }
})
