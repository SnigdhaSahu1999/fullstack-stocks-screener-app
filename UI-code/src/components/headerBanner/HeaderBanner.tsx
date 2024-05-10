import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AboutStock from '../../components/aboutStock/AboutStock';

interface RatioProps {
    stockDetails: IStockDetails;
}

interface DataDisplayProps {
    label: string;
    value: string | number;
  }
  
  const DataDisplay: React.FC<DataDisplayProps> = ({ label, value }) => {
    return (
      <Grid item xs={12} md={2}>
        <Typography color="text.secondary">{label}</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{value}</Typography>
      </Grid>
    );
  };

const HeaderBanner: React.FC<RatioProps> = ({
    stockDetails
}) => {
    const getRoundedNumber = (value : number) => value.toFixed(2)
  return (
    <Card variant="outlined" >
      <Grid container p={2}>
        <Grid item xs={12}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
           {stockDetails.details.fullName}
        </Typography>
        </Grid>
        
            <Grid container  item xs={8} spacing={2} sx={{ border: '1px solid gray', borderRadius: '4px', padding: '12px', margin: '8px' }}>
            <DataDisplay label="Market Cap" value={`${getRoundedNumber(stockDetails.stats.marketCap)}`} />
            <DataDisplay label="Stock P/E" value={`${stockDetails.stats.peRatio}`} />
            <DataDisplay label="ROCE" value={`${getRoundedNumber(stockDetails.stats.sectorRoce)}%`} />
            <DataDisplay label="ROE" value={`${getRoundedNumber(stockDetails.stats.sectorRoe)}%`} />
            <DataDisplay label="Current Price"  value={`₹${getRoundedNumber(stockDetails.stats.bookValue)}`} /> 
            {/* <DataDisplay label="High / Low" value={`₹${getRoundedNumber(stockDetails.priceData.nse.yearHighPrice)} / ₹${getRoundedNumber(stockDetails.priceData.nse.yearLowPrice)}`} /> */}
            <DataDisplay label="Book Value" value={`₹${getRoundedNumber(stockDetails.stats.bookValue)}`} />
            <DataDisplay label="Dividend Yield" value={`${getRoundedNumber(stockDetails.stats.dividendYieldInPercent)}%`} />
            <DataDisplay label="Face Value" value={`₹${getRoundedNumber(stockDetails.stats.faceValue)}`} />
        </Grid>  
        
        <AboutStock businessSummary={stockDetails.details.businessSummary} />  
      </Grid>
    </Card>
  );
};

export default HeaderBanner;
