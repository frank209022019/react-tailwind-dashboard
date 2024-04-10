/* eslint-disable react/jsx-no-undef */
import React from 'react';

import DashboardStatsGrid from '../helpers/Dashboard.StatsGrid';
import StatsGridItem from './StatsGrid.Item';

const StatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      {DashboardStatsGrid.Data.map((item) => (
        <StatsGridItem
          key={item.key}
          title={item.title}
          icon={item.icon}
          value={item.value}
          minorValue={item.minorValue}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
