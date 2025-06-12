import React, { useRef } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const kanbanRef = useRef(null);
  const { currentMode, currentColor } = useStateContext();

  const dialogSettings = {
    fields: [
      { key: 'Id', text: 'ID', type: 'TextBox' },
      { key: 'Summary', text: 'Summary', type: 'TextArea' },
      { key: 'Status', text: 'Status', type: 'DropDown' },
    ],
  };
  

  const openNewTaskDialog = () => {
    kanbanRef.current.openDialog('Add');
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header title="Kanban" category="App" />

      <button onClick={openNewTaskDialog} className="mb-4 text-white px-6 py-2 rounded hover:opacity-90 transition" style={{ backgroundColor: currentColor }}>
        + New Task
      </button>

      <KanbanComponent
        id="kanban"
        ref={kanbanRef}
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        allowAdding={true}
        allowEditing={true}
        dialogSettings={{ ...dialogSettings, 
                          cssClass:currentMode === 'Dark' ? 'dark-kanban-dialog' : '' 
                        }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
