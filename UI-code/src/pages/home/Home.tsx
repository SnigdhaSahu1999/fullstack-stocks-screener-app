import { Users } from "../users/Users";
import "./home.scss";
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { useEffect, useState } from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Grid } from "@mui/material";



const chartSetting = {
  xAxis: [
    {
      label: 'Gainers',
    },
  ],
  width: 320,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
 
];

const valueFormatter = (value: number | null) => `${value}mm`;

export const Home = () => {

  const [topGainers, setTopGainers] = useState<any[]>([]);
  const [topLosers, setTopLosers] = useState<any[]>([]);
  const [mostTraded, setMostTraded] = useState<any[]>([])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8091/top/stocks');
        const { topGainer, topLooser, volume } = response.data;

        setTopGainers(topGainer);
        setTopLosers(topLooser);
        setMostTraded(volume);
      } catch (error) {
        console.log("error")
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Users />
      <Grid container spacing={2}>
      <Grid item xs={4}>
      <Gainertable data={topGainers} />
      </Grid>
      <Grid item xs={4}>
      <Gainertable data={topLosers} />
      </Grid>
      <Grid item xs={4}>
      <VolumeTable data={mostTraded} />
      </Grid>
    </Grid>
  
    </>

  );
};

const VolumeTable = ({ data }) => {
  return (
    <TableContainer component={Paper} style={{ width: '100%' }}>
      <Table>
        <TableHead style={{backgroundColor:'#03054E'}}>
          <TableRow>
            <TableCell style={{color:'white'}}>Company Name</TableCell>
            <TableCell style={{color:'white'}}>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>{item.volumeValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Gainertable = ({ data }) => {
  return (
    <TableContainer component={Paper} style={{ width: '100%' }}>
      <Table>
        <TableHead style={{backgroundColor:'#03054E'}}>
          <TableRow>
            <TableCell style={{color:'white'}}>Company Name</TableCell>
            <TableCell style={{color:'white'}}>Gain/Loss</TableCell>
            <TableCell style={{color:'white'}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>{item.dayChangePerc.toFixed(2)}</TableCell>
              <TableCell>{item.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
