interface IDashboardTransactionChartItem {
  name: string;
  expense: number;
  income: number;
}

const Data: IDashboardTransactionChartItem[] = [
  {
    name: 'Jan',
    expense: 4000,
    income: 2400
  },
  {
    name: 'Feb',
    expense: 3000,
    income: 1398
  },
  {
    name: 'Mar',
    expense: 2000,
    income: 9800
  },
  {
    name: 'Apr',
    expense: 2780,
    income: 3908
  },
  {
    name: 'May',
    expense: 1890,
    income: 4800
  },
  {
    name: 'Jun',
    expense: 2390,
    income: 3800
  },
  {
    name: 'July',
    expense: 3490,
    income: 4300
  },
  {
    name: 'Aug',
    expense: 2000,
    income: 9800
  },
  {
    name: 'Sep',
    expense: 2780,
    income: 3908
  },
  {
    name: 'Oct',
    expense: 1890,
    income: 4800
  },
  {
    name: 'Nov',
    expense: 2390,
    income: 3800
  },
  {
    name: 'Dec',
    expense: 3490,
    income: 4300
  }
];

const DashboardTransactionChart = { Data };

export default DashboardTransactionChart;
