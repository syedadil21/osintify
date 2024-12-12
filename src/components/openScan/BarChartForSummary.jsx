'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';



const dataset = [
  { "value": 0, "month": "antitor" },
  { "value": 0, "month": "blackbird" },
  { "value": 0, "month": "dehashed" },
  { "value": 0, "month": "hunterio" },
  { "value": 0, "month": "siminfo" },
  // { "value": 2, "month": "Affiliate - Domain Name" },
  // { "value": 6, "month": "Affiliate - Email Address" },
  // { "value": 17, "month": "Affiliate - IP Address" },
  // { "value": 26, "month": "Aff    iliate - IPv6 Address" },
  // { "value": 41, "month": "Affiliate - Internet Name" },
  // { "value": 5, "month": "Affiliate - Web Content" },
  // { "value": 76, "month": "Account on External Site" },
  // { "value": 36, "month": "Country Name" },
  // { "value": 11, "month": "City Name" },
  // { "value": 9, "month": "Username" },
  // { "value": 1, "month": "Portfolio" }
];


const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Percentage of Values Found',
    },
  ],
  series: [{ dataKey: 'value', label: 'Values Found', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function BarChartForSummary({scan}) {
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
        dataset={scan ? scan : dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
