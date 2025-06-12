import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Customers = () => {
  const { currentMode } = useStateContext(); 
  
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg"> 
      <Header title="Customers" category="Page" />
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Search', 'Add', 'Delete', 'Edit']} editSettings={{ allowAdding:true, allowDeleting:true, allowEditing:true}} width="auto" className={currentMode === 'Dark' ? 'dark-grid' : 'normal-grid'}>
        <ColumnsDirective>
          {customersGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={ [Page, Toolbar, Selection, Edit, Sort, Filter] } />
      </GridComponent>
    </div>
  )
}

export default Customers;