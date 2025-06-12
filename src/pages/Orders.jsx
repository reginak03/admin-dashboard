import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
  const { currentMode } = useStateContext(); 

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg"> 
      <Header title="Orders" category="Page" />
       {/* id and dataSource are used to pass data to this component */}
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting toolbar={['Search', 'Add', 'Delete', 'Edit']} editSettings={{ allowAdding:true, allowDeleting:true, allowEditing:true}} className={currentMode === 'Dark' ? 'dark-grid' : 'normal-grid'} contextMenuItems={contextMenuItems}>
        <ColumnsDirective> {/* this is where the data goes */}
          {ordersGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={ [Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport] }></Inject>
      </GridComponent>
    </div>
  )
}

export default Orders;