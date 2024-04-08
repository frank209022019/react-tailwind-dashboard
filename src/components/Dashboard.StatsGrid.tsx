/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { HiOutlineChatAlt } from 'react-icons/hi';

import DashboardStatsGridItem from './Dashboard.StatsGrid.Item';

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <DashboardStatsGridItem key={1} title={'1'} icon={<HiOutlineChatAlt />} />
      <DashboardStatsGridItem key={2} title={'2'} icon={<HiOutlineChatAlt />} />
      <DashboardStatsGridItem key={3} title={'3'} icon={<HiOutlineChatAlt />} />
      <DashboardStatsGridItem key={4} title={'4'} icon={<HiOutlineChatAlt />} />
    </div>
  );
};

export default DashboardStatsGrid;
