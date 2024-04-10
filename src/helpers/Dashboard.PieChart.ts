interface IDashboardPieChartItem {
  name: string;
  value: number;
}
const Data: IDashboardPieChartItem[] = [
  { name: 'male', value: 540 },
  { name: 'female', value: 620 },
  { name: 'other', value: 210 }
];

const RADIAN = Math.PI / 180;
const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const DashboardPieChart = { Data, RADIAN, COLORS };

export default DashboardPieChart;
