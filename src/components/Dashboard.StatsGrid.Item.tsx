import React from 'react';

import classNames from 'classnames';

export interface IDashboardStatsGridItem {
  key: number;
  title: string;
  icon: string;
  value: number;
  minorValue: number;
}

const DashboardStatsGridItem = ({ title, icon, value, minorValue }: IDashboardStatsGridItem) => {
  return (
    <div className="bg-white rounded p-2 border border-gray-700 flex items-center w-full shadow-md">
      <div className="rounded-full size-10 flex items-center justify-center ml-1 bg-gray-700">
        <span className="text-2xl text-white material-symbols-outlined">{icon}</span>
      </div>
      <div className="pl-3">
        <span className="text-sm text-gray-500 font-light">{title}</span>
        <div className="flex items-center mt-[-5px]">
          <strong className="text-xl text-gray-500 font-semibold">{value}</strong>
          <span
            className={classNames(
              minorValue > 0 ? 'text-green-400' : 'text-red-400',
              'text-sm pl-2 font-light'
            )}>
            {minorValue}{' '}
            <span className="material-symbols-outlined text-xs">
              {minorValue > 0 ? 'trending_up' : 'trending_down'}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsGridItem;
