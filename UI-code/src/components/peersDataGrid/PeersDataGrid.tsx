
import { Box } from '@mui/material';
import EnhancedDataGrid from '../../components/enhancedDataGrid/EnhancedDataGrid';

const columns = [
  { field: 'displayName', headerName: 'Name', width: 200 },
  { field: 'nseScriptCode', headerName: 'NSE Code', width: 150 },
  { field: 'bseScriptCode', headerName: 'BSE Code', width: 110 },
  { field: 'marketCap', headerName: 'Market Cap', width: 130 },
  { field: 'peRatio', headerName: 'P/E Ratio', width: 100 },
  { field: 'pbRatio', headerName: 'P/B Ratio', width: 100 },
];
interface IPeersDataProps{
    peerList: Peer[];
}
const PeersDataGrid = ({ peerList }:IPeersDataProps) => {
  const rows = peerList.map((peer:Peer, index:number) => ({
    id: index, 
    displayName: peer.companyHeader.displayName,
    nseScriptCode: peer.companyHeader.nseScriptCode,
    bseScriptCode: peer.companyHeader.bseScriptCode,
    marketCap: peer.marketCap,
    peRatio: peer.peRatio,
    pbRatio: peer.pbRatio,
  }));

  return (
    <Box>
      <EnhancedDataGrid
        rows={rows}
        columns={columns}
        
      />
    </Box>
  );
};

export default PeersDataGrid;
