import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Calendar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg"> {/* this is the entire card */}
      <Header title="Calendar" category="App" />
      <ScheduleComponent height="650px" eventSettings={{ dataSource:scheduleData }} selectedDate={new Date(2025,0,10)} className={currentMode === 'Dark' ? 'dark' : 'light'}>
        <Inject services={ [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop] } />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar;