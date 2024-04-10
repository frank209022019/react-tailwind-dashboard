import { IStatsGridItem } from '../components/StatsGrid.Item';

const Data: IStatsGridItem[] = [
  {
    key: 1,
    title: 'Total Sales',
    icon: 'attach_money',
    value: 1000,
    minorValue: 20
  },
  {
    key: 2,
    title: 'Total Expenses',
    icon: 'payments',
    value: 500,
    minorValue: 10
  },
  {
    key: 3,
    title: 'Total Customers',
    icon: 'supervisor_account',
    value: 750,
    minorValue: 15
  },
  {
    key: 4,
    title: 'Total Orders',
    icon: 'orders',
    value: 200,
    minorValue: -15
  }
];

const DashboardStatsGrid = { Data };

export default DashboardStatsGrid;
