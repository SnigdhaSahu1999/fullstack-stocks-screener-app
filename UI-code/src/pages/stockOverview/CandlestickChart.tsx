import React from 'react';
import { Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import { CandleStickData } from '../../data';


interface ICandlestickChart{
  title:string;
}
const CandlestickChart: React.FC<ICandlestickChart> = ({title}) => {
    const data = CandleStickData;

    const series = [{
        name: 'candle',
        data: data.map(d => ({ x: d.x, y: d.y })),
    }];

    const options: ApexCharts.ApexOptions = {
        chart: {
            height: 350,
            type: 'candlestick',
        },
        title: {
            text: `${title}`,
            align: 'left'
        },
        annotations: {
            xaxis: [{
                x: new Date(2023, 7, 6, 14).getTime(),
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: '#00E396'
                    },
                    orientation: 'horizontal',
                    offsetY: 7,
                    // text: 'Annotation Test'
                }
            }]
        },
        tooltip: {
            enabled: true,
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function (val: string) {
                    return dayjs(new Date(Number(val))).format('MMM DD HH:mm');
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
      <Box style={{ height: 500 }}>
      <ReactApexChart options={options} series={series} type="candlestick"   width="100%"
              height="100%"/>
            </Box>
    );
};

export default CandlestickChart;
