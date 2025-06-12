import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor, currentMode } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        legendSettings={{ background: 'transparent' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        theme={currentMode === 'Dark' ? 'MaterialDark' : 'Material'}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;

// fixed minor error, this was the previous code. Syncfusion documentation suggest that we use a class-based component for the sparkline chart.
// const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
//   return (
//     <SparklineComponent id={id} 
//                         height={height} 
//                         width={width} 
//                         LineWidth={1} 
//                         valueType="Numeric" 
//                         fill={color} 
//                         border={{ color:currentColor, width:2 }} 
//                         dataSource={data} 
//                         xName="x" 
//                         yName="yval" 
//                         type={type}
//                         tooltipSettings={{ visible:true, format:'${x} : data ${yval}', trackLineSettings:{ visible:true, }, }} >
//       <Inject services={[SparklineTooltip]}/>
//     </SparklineComponent>
//   )
// }

// export default SparkLine;