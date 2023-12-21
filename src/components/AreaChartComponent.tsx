// AreaChartComponent.tsx
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Interface for props
interface AreaChartComponentProps {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

export default class AreaChartComponent extends PureComponent<AreaChartComponentProps> {
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorOne" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a457a0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a456a0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#a457a0" fill="url(#colorOne)" />

        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
