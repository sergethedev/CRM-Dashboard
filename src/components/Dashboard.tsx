import React from 'react';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';
import RadarChartComponent from './RadarChartComponent';
import PieChartComponent from './PieChartComponent';
import { PieChart, ScatterChart } from 'recharts';
import ScatterChartComponent from './ScatterChartComponent';


const Dashboard = () => {
  // Prepare the data and options for the LineChart


  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  const chartOptions = {
    // ... options for the chart
  };

  return (
    <div className="grid grid-cols-5 grid-rows-7 gap-4 w-screen h-screen p-16 bg-background">
      <div className="row-span-2 rounded-2xl bg-box"></div>
      <div className="row-span-2 rounded-2xl bg-box"></div>
      <div className="rounded-2xl bg-box">
        <BarChartComponent />
      </div>
      <div className="col-start-3 row-start-2 rounded-2xl bg-box"></div>
      <div className="col-span-2 row-span-3 col-start-4 row-start-1 rounded-2xl bg-box">
        <RadarChartComponent />
      </div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-4 rounded-2xl bg-box">
        <ScatterChartComponent />
      </div>
      <div className="col-span-3 row-span-3 col-start-1 row-start-3 rounded-2xl bg-box">
        <AreaChartComponent data={chartData} />
      </div>
      <div className="row-span-2 row-start-6 rounded-2xl bg-box">
        <PieChartComponent />
      </div>
      <div className="col-span-2 row-span-2 row-start-6 rounded-2xl bg-box">
        <BarChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
