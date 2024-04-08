import React from 'react';

export interface IDashboardStatsGridItem {
  key: number;
  title: string;
  icon: JSX.Element;
}

const DashboardStatsGridItem = ({ title }: IDashboardStatsGridItem) => {
  return (
    <div className="bg-white rounded p-4 border border-gray-700 flex items-center w-full shadow-md">
      {title}
    </div>
  );
};

export default DashboardStatsGridItem;
