import React from 'react';
import { Header, LineChart } from '../../components';

const Line = () => {
  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header title="Inflation Rate" category="Chart" />
        <div className="w-full">
          <LineChart /> {/* go to LineChart component */}
        </div>
      </div>
    </div>
  )
}

export default Line;