import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MarketLogo from "/logo.png";
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { openSidebarContext } from "../../context/openSidebarContext";
import DropdownLanguage from "../DropMenuLanguage";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


const Navbar = () => {
  const {mobileOpen, setMobileOpen} = useContext(openSidebarContext);
  const drawerWidth = "8%";

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNotfication, setAnchorElNotfication] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorElNotfication(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotfication(null);
  };

  
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#F84B0E",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={()=>setMobileOpen(!mobileOpen)}
          sx={{ mr: 2, display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Toolbar
          sx={{
            position: "relative",
            display: { lg: "block", md: "none", sm: "none", xs: "none" },
            width: "350px",
            marginLeft: "-25px",
            borderRadius: "0px 0px 0px 70px",
            backgroundColor: "#F6F6F6",
          }}
        >
          <img src={MarketLogo} alt="Logo" style={{ width: "100%", marginLeft:"10px" }} />
        </Toolbar>

        <Box>
        <IconButton
        size="large"
        aria-label="show 3 new notifications"
        color="inherit"
        onClick={handleNotificationClick}
      >
        <Badge badgeContent={3} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
                id="menu-appbar"
                anchorEl={anchorElNotfication}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNotfication)}
                onClose={handleCloseNotification}
              >
                <MenuItem onClick={handleCloseNotification}>message one </MenuItem>
                <MenuItem onClick={handleCloseNotification}>message two </MenuItem>
                <MenuItem onClick={handleCloseNotification}> message three </MenuItem>
              </Menu>
          <IconButton 
            size="small"
            color="inherit">
          <DropdownLanguage />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
