import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent id="line-chart" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border:{width:0} }} tooltip={{ enable:true }} background={ currentMode === 'Dark' ? '#33373E':'#fff' }> 
    {/* without primaryXAxis & primaryYAxis we get the default values belonging to the specific data points. chartArea is used to remove the border of the chart. tooltip is to get information about each point on the chart. */}
      <Inject services={ [LineSeries, DateTime, Legend, Tooltip] } />
      {/* map over the data: */}
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart

//change chart text color when dark, currently not very readable!