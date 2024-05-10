import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CandlestickChart from "./CandlestickChart";
import HeaderBanner from "../../components/headerBanner/HeaderBanner";
import PeersDataGrid from "../../components/peersDataGrid/PeersDataGrid";
import ShareHoldingPatternChart from "../../components/shareHoldingPatternChart/ShareHoldingPatternChart";
import FinancialChartTabs from "../../components/financialChartTabs/FinancialChartTabs";
import { apiresponse } from "../../data";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from "../../components/navbar/Navbar";

const StockOverview = () => {
  const [stockDetails, setStockDetails] = useState<IStockDetails | null>(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const url = `http://localhost:8091/company/search?companyName=${id}`;
          const finalUrl =url.replace('%20', ' ');
           const response = await axios.get(finalUrl);
            setStockDetails(response.data?? apiresponse as unknown as IStockDetails);
        } catch (error) {
            console.log(error)
          }
    };

    fetchData();
  }, []); 
  // stockDetails.details.fullName = id??'';
  return (
    <div>
    <Navbar />
    <Grid container spacing={2} pt={2}>
      {stockDetails && (
        <>
          <Grid item xs={12}>
            <HeaderBanner stockDetails={stockDetails} />
          </Grid>
          <Grid item xs={12}>
            <CandlestickChart title={stockDetails.details.fullName} />
          </Grid>
          {/* <Grid item xs={6}>
            <PeersDataGrid peerList={stockDetails.similarAssets.peerList} />
          </Grid> */}
          <Grid item xs={12}>
            <FinancialChartTabs financialStatement={stockDetails.financialStatement} />
          </Grid>
          {/* <Grid item xs={12}>
            <ShareHoldingPatternChart shareHoldingPattern={stockDetails.shareHoldingPattern} />
          </Grid> */}
        </>
      )}
    </Grid>
    </div>
  );

};

export default StockOverview;
