import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

//this chart shows the total expense and budget by month
const Stacked = ( {width, height, currentMode} ) => {
  const backgroundColor = currentMode === 'Dark' ? '#33373E' : '#fff';

  return (
    <ChartComponent width={width}
                    height={height}
                    id="charts" //to get extra info when toggling on the chart (id is based on how we specify the (dummy) data)
                    primaryXAxis={stackedPrimaryXAxis}
                    primaryYAxis={stackedPrimaryYAxis}
                    chartArea={{ border:{width:0} }}
                    tooltip={{ enable:true, 
                               fill: currentMode === 'Dark' ? '#2d2d2d' : '#fff', 
                               textStyle: {color: currentMode === 'Dark' ? '#F3F4F6' : '#111',}, 
                              }}
                    legendSettings={{
                      background: backgroundColor,
                      textStyle: { color: currentMode === 'Dark' ? '#F3F4F6' : '#111', },
                    }}
                    background={backgroundColor} >
      <Inject services={ [Legend, Category, StackingColumnSeries, Tooltip] } />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)} {/* spread all the properties of the item (actual data points */}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked;