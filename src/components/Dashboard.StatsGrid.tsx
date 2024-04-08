/* eslint-disable react/jsx-no-undef */
import React from 'react';

import DashboardStatsGridArray from '../helpers/Dashboard.StatsGrid.Array';
import DashboardStatsGridItem from './Dashboard.StatsGrid.Item';

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      {DashboardStatsGridArray.StatGridItems.map((item) => (
        <DashboardStatsGridItem
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

export default DashboardStatsGrid;
