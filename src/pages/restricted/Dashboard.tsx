import React from 'react';

import BuyerProfilePieChart from '../../components/PieChart';
import PopularProducts from '../../components/PopularProducts';
import RecentOrders from '../../components/RecentOrders';
import StatsGrid from '../../components/StatsGrid';
import TransactionChart from '../../components/TransactionChart';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <StatsGrid />

      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
