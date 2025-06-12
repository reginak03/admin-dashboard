import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Employees = () => {
  const { currentMode } = useStateContext(); 

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg"> 
      <Header title="Employees" category="Page" />
      {/* <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto" className={currentMode === 'Dark' ? 'dark-grid' : 'normal-grid'}> */}
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search', 'Add', 'Delete', 'Edit']} editSettings={{ allowAdding:true, allowDeleting:true, allowEditing:true}} width="auto" className={currentMode === 'Dark' ? 'dark-grid' : 'normal-grid'}>
        <ColumnsDirective> {/* this is where the data goes */}
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={ [Page, Search, Toolbar] } />
      </GridComponent>
    </div>
  )
}

export default Employees;