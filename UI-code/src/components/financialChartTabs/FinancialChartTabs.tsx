import  { useState } from 'react';
import { Tabs, Tab, Box, AppBar, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const FinancialChartTabs = ({ financialStatement }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const transformData = (data) => {
    return Object.entries(data).map(([year, value]) => ({ year, value }));
  };

  const renderBarChart = (data) => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={transformData(data)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#87CEEB" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <Box sx={{ width: '100%' }} mt={3}>
            <Typography variant="h6" textAlign='center' sx={{ color:'#13274F'}}>Company Financials</Typography>
            <AppBar position="static" sx={{ mt: 1, bgcolor: 'white' }}>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {financialStatement.map((item, index) => (
            <Tab key={index} label={item.title} />
          ))}
        </Tabs>
      </AppBar>
      {financialStatement.map((item, index) => (
        <TabPanel key={index} value={selectedTab} index={index}>
          {renderBarChart(item.yearly)}
        </TabPanel>
      ))}
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`financial-tabpanel-${index}`}
      aria-labelledby={`financial-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default FinancialChartTabs;
