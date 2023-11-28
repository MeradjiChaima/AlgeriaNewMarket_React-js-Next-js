import  React, {Suspense,lazy} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MarketLogo from "/logo.png";
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

//components
import SideBar from '../../sidebar/variations/SideBar';


const drawerWidth = '8%';

function ResponsiveDrawer(props) {
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SideBar/>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />



      {/*//////////////////////navbar///////////// //////////////////////////////////// */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1 ,
          backgroundColor: '#F84B0E',
          

        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon /> 
          </IconButton>
          <Toolbar
            sx={{
              position:"relative",
              display: {lg:'block',md:'none', sm : 'none', xs : 'none' },
              width:"15%",
              borderRadius: '0px 0px 0px 70px',
              backgroundColor: '#F6F6F6',
            }}
          >
            <img src={MarketLogo} alt="Logo" style={{ width: '100%',  }} />
          </Toolbar>

         
          <Box >
            
            <IconButton
              size="large"
              aria-label="show 3 new notifications"
              color="inherit"
            >

              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>

            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
      {/*/////////////////////////////////// navbar//////////////////////////////////// */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: 'none',  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs:'none',sm:'none',  md: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}



export default ResponsiveDrawer;