import React from 'react';

interface IDashboardRecentOrderItem {
  id: string;
  product_id: string;
  customer_id: string;
  customer_name: string;
  order_date: string;
  order_total: string;
  current_order_status: string;
  shipment_address: string;
}

const Data = (): IDashboardRecentOrderItem[] => {
  const newOrders = [];
  for (let i = 0; i < 30; i++) {
    const newOrder = {
      id: (Data.length + 1 + i).toString(),
      product_id: Math.floor(Math.random() * 10000).toString(),
      customer_id: Math.floor(Math.random() * 100000).toString(),
      customer_name: `Customer ${i + 1}`,
      order_date: new Date().toISOString().slice(0, 10),
      order_total: `$${(Math.random() * 1000).toFixed(2)}`,
      current_order_status: ['PLACED', 'CONFIRMED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED'][
        Math.floor(Math.random() * 5)
      ],
      shipment_address: `City ${i + 1}, State ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))} 9000${i}` // Random address format
    };
    newOrders.push(newOrder);
  }

  return newOrders;
};

function GetOrderStatus(status: string) {
  switch (status) {
    case 'PLACED':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
    case 'CONFIRMED':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
    case 'SHIPPED':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
    case 'OUT_FOR_DELIVERY':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
    case 'DELIVERED':
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
  }
}

const DashboardRecentOrders = { Data, GetOrderStatus };

export default DashboardRecentOrders;
