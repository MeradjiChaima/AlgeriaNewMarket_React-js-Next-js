import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import { House, Buildings, Cube, Scroll, ChatTeardropDots, AddressBook, ClipboardText, CurrencyEur } from "@phosphor-icons/react";


const tabStyles = {
  color: 'white',
  textTransform: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&.Mui-selected': {
    color: '#F84B0E',
    backgroundColor: 'white',
  },
};

const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue);
  };

  // Map the route paths to the corresponding tab index
  const routeToTabIndex = {
    '/': 0,
    '/company': 1,
    '/produits': 2,
    '/commandes': 3,
    '/messages': 4,
    '/contactes': 5,
    '/rfq': 6,
    '/transaction': 7,
  };

  // Set the selected tab based on the current route
  useEffect(() => {
    const currentTab = routeToTabIndex[location.pathname];
    setSelectedTab(currentTab || 0);
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          maxWidth: 150,
          '& .MuiDrawer-paper': {
            border: 'none',
            backgroundColor: '#F84B0E',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ width: '100%' }}>
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="transparent"
            sx={{
              marginTop: '50%',
              width: '100%',
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab
              label="Acceuil"
              icon={<House size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/');
              }}
            />
            <Tab
              label="Company"
              icon={<Buildings size={23}/>}
              sx={tabStyles}
              onClick={() => {
                navigate('/company');
              }}
            />
            <Tab
              label="Produits"
              icon={<Cube size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/produits');
              }}
            />
            <Tab
              label="Commandes"
              icon={<Scroll size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/commandes');
              }}
            />
            <Tab
              label="Messages"
              icon={<ChatTeardropDots size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/messages');
              }}
            />
            <Tab
              label="Contactes"
              icon={<AddressBook size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/contactes');
              }}
            />
            <Tab
              label="RFQ"
              icon={<ClipboardText size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/rfq');
              }}
            />
            <Tab
              label="Transaction"
              icon={<CurrencyEur size={23} />}
              sx={tabStyles}
              onClick={() => {
                navigate('/transaction');
              }}
            />
          </Tabs>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Content;