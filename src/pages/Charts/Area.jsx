import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const AreaChart = () => {
  const { currentMode } = useStateContext();
  const textColor = currentMode === 'Dark' ? '#fff' : '#000';

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Inflation Rate in Percentage" category="Area" />
      <ChartComponent id="area-chart" height="420px" primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border:{width:0} }} tooltip={{ enable:true }} legendSettings={{ textStyle:{ color:textColor } }} background={ currentMode === 'Dark' ? '#33373E':'#fff' }> 
        <Inject services={ [SplineAreaSeries, DateTime, Legend] } />
        {/* map over the data: */}
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default AreaChart;