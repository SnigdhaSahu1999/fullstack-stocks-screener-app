import  { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';

interface IAboutStockProps{
    businessSummary: string;
}
const AboutStock = ({ businessSummary }:IAboutStockProps) =>{
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };


  const truncateSummary = (summary:string, characterLimit = 200) => {
    return summary.length > characterLimit && !showMore
      ? `${summary.substring(0, characterLimit)}...`
      : summary;
  };

  return (
    <Grid container item xs={3} spacing={2} sx={{ padding: '12px', margin: '6px' }}>
      <Grid item xs={12}>
        <Typography variant="h5" >About</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">
          {truncateSummary(businessSummary)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={toggleShowMore} size='small'>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </Grid>
    </Grid>
  );
}

export default AboutStock;
