import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

//this chart shows the total expense and budget by month
const Stacked = ( {width, height} ) => {
  return (
    <ChartComponent width={width}
                    height={height}
                    id="charts" //to get extra info when toggling on the chart (id is based on how we specify the (dummy) data)
                    primaryXAxis={stackedPrimaryXAxis}
                    primaryYAxis={stackedPrimaryYAxis}
                    chartArea={{ border:{width:0} }}
                    tooltip={{ enable:true }}
                    legendSettings={{ background:'white' }} >
      <Inject services={ [Legend, Category, StackingColumnSeries, Tooltip] } />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)} {/* spread all the properties of the item (actual data points */}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked