import React from 'react';

import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


// les icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';








const tabStyles = { //styling of the Tabs
  color: 'white',
  textTransform:"none",
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  '&.Mui-selected': {
    color: '#F84B0E',
    backgroundColor: 'white',
  },
};

export default function SideBar() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue);
  };

  return (

  <>
        
      
  
    <Box sx={{ display: 'flex' }}> 
        

      <Drawer
        sx={{
          maxWidth:150,
          '& .MuiDrawer-paper': {
            border:'none',
            backgroundColor: '#F84B0E',
          },
        }}
        variant="permanent" 
        anchor="left"
      >
        
        
        <Box
            sx={{
              width: '100%',
            }}
          > 
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="transparent"
            
            sx={{
              marginTop: '50%', //margin top should be more or same height of navbar
              width: '100%', // Make the Tabs fill the available width
              '& .MuiTabs-indicator': {
                display: 'none', // Remove the indicator line
              },
            }}
          >
            <Tab label="Acceuil" icon={<HomeOutlinedIcon />} sx={tabStyles} />
            <Tab label="Company" icon={<AccountBalanceOutlinedIcon />} sx={tabStyles} onClick={() => { window.location.href = '/company';}} /> 
            <Tab label="Produits" icon={<HomeOutlinedIcon />} sx={tabStyles} onClick={() => { window.location.href = '/product';}} />
            <Tab label="Commandes" icon={<InventoryOutlinedIcon />} sx={tabStyles} />
            <Tab label="Messages" icon={<ForumOutlinedIcon />} sx={tabStyles} />
            <Tab label="Contactes" icon={<HomeOutlinedIcon />} sx={tabStyles} />
            <Tab label="RFQ" icon={<HomeOutlinedIcon />} sx={tabStyles} />
            <Tab label="Transaction" icon={<CurrencyExchangeOutlinedIcon />} sx={tabStyles} />
          </Tabs>
        </Box>
      </Drawer>
    </Box>
    

    </>
  );
}
