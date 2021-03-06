$(document).ready(function() {
  var timeseriesElement = document.getElementById('timeseries'),
      height  = 300,
      width   = 800,
      margins = { top: 20, left: 30, bottom: 30, right: 20}

  var timeseries = {
    sales: [
      {x: '01-May-12', y: 1},
      {x: '30-Apr-12', y: 2},
      {x: '27-Apr-12', y: 3},
      {x: '26-Apr-12', y: 5},
      {x: '25-Apr-12', y: 2},
      {x: '24-Apr-12', y: 4},
      {x: '23-Apr-12', y: 3},
      {x: '20-Apr-12', y: 6},
      {x: '19-Apr-12', y: 1},
      {x: '18-Apr-12', y: 2},
      {x: '17-Apr-12', y: 3}
    ],
    purchases: [
      {x: '27-Apr-12', y: 5},
      {x: '26-Apr-12', y: 3},
      {x: '25-Apr-12', y: 4},
      {x: '24-Apr-12', y: 3},
      {x: '23-Apr-12', y: 1},
      {x: '20-Apr-12', y: 3},
      {x: '19-Apr-12', y: 6},
      {x: '18-Apr-12', y: 3},
      {x: '17-Apr-12', y: 2},
      {x: '16-Apr-12', y: 1},
      {x: '13-Apr-12', y: 3},
      {x: '12-Apr-12', y: 5},
      {x: '11-Apr-12', y: 6}
    ]
  };

  var onMouseEnter = function() {
    console.log('time-boom')
  };

  var onMouseLeave = function() {
    console.log('time-pop')
  };

  var onMouseClick = function() {
    console.log('time-boompop')
  };

  React.render(
    <Charts.LineCharts.TimeSeries
      datasets={timeseries}
      height={height}
      width={width}
      ylabel={''}
      xlabel={''}
      timeFormat={'%d-%b-%y'}
      margins={margins}
      xAxisTickCount={5}
      yAxisTickCount={3}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseClick={onMouseClick} />,
    timeseriesElement
  );
})
