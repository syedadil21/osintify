'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';



const dataset = [
  { "value": 0, "month": "Affiliate - Company Name" },
  { "value": 2, "month": "Affiliate - Domain Name" },
  { "value": 6, "month": "Affiliate - Email Address" },
  { "value": 17, "month": "Affiliate - IP Address" },
  { "value": 26, "month": "Affiliate - IPv6 Address" },
  { "value": 41, "month": "Affiliate - Internet Name" },
  { "value": 100, "month": "Affiliate - Web Content" },
  { "value": 76, "month": "Account on External Site" },
  { "value": 36, "month": "Bitcoin Address" },
  { "value": 11, "month": "Bitcoin Balance" },
  { "value": 9, "month": "Username" },
  { "value": 1, "month": "Portfolio" }
];


const valueFormatter = (value) => `${value}%`;

const chartSetting = {
  yAxis: [
    {
      label: 'Percentage of unique elements',
    },
  ],
  series: [{ dataKey: 'value', label: 'Unique Elements', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function BarChartForSummary() {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');

  return (
    <div style={{ width: '100%' }}>
      {/* <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      /> */}
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
