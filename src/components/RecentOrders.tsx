import React from 'react';

// import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import DashboardRecentOrders from '../helpers/Dashboard.RecentOrders';

const RecentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="overflow-y-auto h-[300px]">
        <div className="sticky top-0">
          <table className="w-full text-left text-gray-600">
            <thead>
              <tr>
                <th className="text-md font-medium">Customer</th>
                <th className="text-md font-medium">Date</th>
                <th className="text-md font-medium">Total</th>
                <th className="text-md font-medium">Shipping Address</th>
                <th className="text-md font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {DashboardRecentOrders.Data().map((order) => (
                <tr className="h-10" key={order.id}>
                  <td className="text-xs font-normal">{order.customer_name}</td>
                  <td className="text-xs font-normal">
                    {format(new Date(order.order_date), 'dd MMM yyyy')}
                  </td>
                  <td className="text-xs font-normal">{order.order_total}</td>
                  <td className="text-xs font-normal">{order.shipment_address}</td>
                  <td className="text-xs font-normal">
                    {DashboardRecentOrders.GetOrderStatus(order.current_order_status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
