import DataTable from "../../components/dataTable/DataTable";
import { users } from "../../data";
import "./users.scss";
import { GridColDef, GridRenderCellParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { Button, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Slider, ThemeProvider, createTheme } from '@mui/material';
import { SetStateAction, useEffect, useMemo, useState } from "react";
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import axios from "axios";

function valuetext(value: number) {
  return `${value}°C`;
}

export const Users = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#0077B6', 
      },
    },
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [data, setData] = useState<any[]>([]);

  const handleCellClick = (cellValues: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
    setModalContent(cellValues.value);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8091/search');
        setData(response.data)
      } catch (error) {
        console.log("error")
      }
    };

    fetchData();
  }, []);

  const tableData = useMemo(
    () =>
      data.map((item) => ({
        closePrice: item.closePrice,
        marketCap: item.marketCap,
        companyName: item.companyName,
        id: Math.random(),
        peRatio: item.peRatio,
      })),
    [data]
  );

  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 100, },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 300,
      renderCell: (cellValues) => (
        <div
          onClick={() => handleCellClick(cellValues)}
          style={{ cursor: 'pointer' }}
        >
          {cellValues.value}
        </div>
      ),
    },
    {
      field: "closePrice",
      headerName: "Close Price",
      width: 200,
      editable: false,
    },
    {
      field: "marketCap",
      headerName: "Market Cap",
      width: 200,
      editable: false,
    },
    {
      field: "peRatio",
      headerName: "P/E Ratio",
      width: 200,
      editable: false,
    },

  ];

  const [industry, setIndustry] = useState('');
  const [index, setIndex] = useState('');

  const handleChangeIndustry = (event: { target: { value: string; }; }) => {
    setIndustry(event.target.value as string);
  };
  const handleChangeIndex = (event: { target: { value: string; }; }) => {
    setIndex(event.target.value as string);
  };

  const [value, setValue] = useState<number[]>([20, 37]);
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const [value2, setValue2] = useState<number[]>([20, 37]);
  const [value3, setValue3] = useState<number[]>([20, 37]);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleChangeSlider1 = (event: Event, newValue: number | number[]) => {
    setValue1(newValue as number[]);
  };
  const handleChangeSlider2 = (event: Event, newValue: number | number[]) => {
    setValue2(newValue as number[]);
  };
  const handleChangeSlider3 = (event: Event, newValue: number | number[]) => {
    setValue3(newValue as number[]);
  };

  return (
    <div className="users" style={{margin: 10}}>
      {/* <ThemeProvider style>
        <CssBaseline /> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{padding:20 , backgroundColor: '#e5f0f2'}} >
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={industry}
                      label="Industry"
                      onChange={handleChangeIndustry}
                    >
                      <MenuItem value={10}>Agriculture</MenuItem>
                      <MenuItem value={20}>Machinery</MenuItem>
                      <MenuItem value={30}>Pharmaceutical</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Index</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={index}
                      label="Industry"
                      onChange={handleChangeIndex}
                    >
                      <MenuItem value={10}>SENSEX</MenuItem>
                      <MenuItem value={20}>Nifty 50</MenuItem>
                      <MenuItem value={30}>Nifty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Volume
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Market Cap
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value1}
                    onChange={handleChangeSlider1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    P/E Ratio
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value2}
                    onChange={handleChangeSlider2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography id="input-slider" gutterBottom>
                    Price
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value3}
                    onChange={handleChangeSlider3}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item style={{marginLeft: 700}}>
                <Button variant="contained" style={{marginRight: 10, minWidth : '140px', maxWidth: '140px', color: '#03045e',  borderColor: '#03045e', backgroundColor:'white'}}>Clear Filters</Button>
                <Button variant="contained" style={{ minWidth : '140px', maxWidth: '140px', backgroundColor: '#03045e'}}>Search</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>     <DataTable columns={columns} rows={tableData} /></Paper>
          </Grid>
          <Dialog open={openModal} onClose={handleCloseModal}>
            <div>{modalContent}</div>
          </Dialog>
        </Grid>
      {/* </ThemeProvider> */}
    </div>
  );
};
