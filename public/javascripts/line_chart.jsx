$(document).ready(function() {
  var lineChartElement  = document.getElementById('line-chart'),
      height  = 300,
      width   = 800,
      margins = { top: 20, left: 30, bottom: 30, right: 20}

  var datasets = {
    sales: [
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3},
      {x: 4, y: 5},
      {x: 5, y: 2},
      {x: 6, y: 4},
      {x: 7, y: 3},
      {x: 8, y: 6},
      {x: 9, y: 1},
      {x: 10, y: 2},
      {x: 11, y: 3}
    ],
    purchases: [
      {x: 1, y: 5},
      {x: 2, y: 3},
      {x: 3, y: 4},
      {x: 4, y: 3},
      {x: 5, y: 1},
      {x: 6, y: 3},
      {x: 7, y: 6},
      {x: 8, y: 3},
      {x: 9, y: 2},
      {x: 10, y: 1},
      {x: 11, y: 3},
      {x: 12, y: 5},
      {x: 13, y: 6}
    ]
  };

  var onMouseEnter = function() {
    console.log('boom')
  };

  var onMouseLeave = function() {
    console.log('pop')
  };

  var onMouseClick = function() {
    console.log('boompop')
  };

  React.render(
    <Charts.LineCharts.LineChart
      datasets={datasets}
      height={height}
      width={width}
      ylabel={''}
      margins={margins}
      xAxisTickCount={5}
      yAxisTickCount={3}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseClick={onMouseClick} />,
    lineChartElement
  );
})
