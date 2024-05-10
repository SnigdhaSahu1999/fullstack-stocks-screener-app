import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

interface IShareHoldingPatternChart{
    shareHoldingPattern: { [key: string]: ShareHoldingPattern };
}
const ShareHoldingPatternChart = ({ shareHoldingPattern }:IShareHoldingPatternChart) => {
  // Function to create chart data from the shareholding pattern
  const createChartData = (data) => {
    const categories = ['promoters', 'mutualFunds', 'otherDomesticInstitutions', 'foreignInstitutions', 'retailAndOthers'];
    return categories.map((category) => {
      const value = data[category].hasOwnProperty('percent') 
        ? data[category].percent
        : Object.values(data[category]).reduce((sum, { percent }) => sum + percent, 0);
      return { name: category, value: parseFloat((value).toFixed(2)) };
    });
  };

  // Prepare the data for all dates
  const chartsData = Object.entries(shareHoldingPattern).map(([date, data]) => ({
    date,
    data: createChartData(data)
  }));

  return (
    <>
    <Typography variant="h6" textAlign='center' sx={{ color:'#13274F'}}>Shareholding Patterns</Typography>
    <Box sx={{ display: 'flex', overflowX: 'auto', gap: 4 , mt:2,   '& .MuiTypography-root': { 
        fontWeight: 'bold',
        color: 'primary.main', 
      },}} >
     
      {chartsData.map(({ date, data }) => (
        <Box key={date} sx={{ minWidth: 350 }}>
          <Typography variant="subtitle1" align="center">{date}</Typography>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
              labelLine={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${(value).toFixed(2)}%`} />
              <Legend
            content={<CustomLegend />}
                    />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      ))}
    </Box>
    </>
  );
};
const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {payload.map((entry, index) => (
          <li key={`legend-item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <div style={{
              width: '1em',
              height: '1em',
              backgroundColor: entry.color,
              marginRight: 8,
            }} />
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

export default ShareHoldingPatternChart;
