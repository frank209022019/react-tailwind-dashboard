import { IDashboardStatsGridItem } from '../components/Dashboard.StatsGrid.Item';

const StatGridItems: IDashboardStatsGridItem[] = [
  {
    key: 1,
    title: 'Products',
    icon: 'local_mall',
    value: 1000,
    minorValue: 20
  },
  {
    key: 2,
    title: 'Sales',
    icon: 'point_of_sale',
    value: 500,
    minorValue: 10
  },
  {
    key: 3,
    title: 'Customers',
    icon: 'supervisor_account',
    value: 750,
    minorValue: 15
  },
  {
    key: 4,
    title: 'Contacts',
    icon: 'contact_support',
    value: 200,
    minorValue: -15
  }
];

const DashboardStatsGridArray = { StatGridItems };

export default DashboardStatsGridArray;
