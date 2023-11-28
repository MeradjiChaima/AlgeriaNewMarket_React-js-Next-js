import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const settings = ['Profile'];

function MessageBar({changesize,username,photo}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 const [unchangecontact,setunchangecontact]=React.useState(false);
 const [unchangehistory,setunchangehistory]=React.useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  function displaysectionhistory (){
    if (!unchangehistory){
      changesize({size:"75%",type:"history"}); 
    }
    else{
      changesize({size:"100%",type:"history"}); 
    }
     
     setunchangehistory(!unchangehistory);
  
    }
  return (
    <AppBar  position="static" sx={{width:"100%",background:"#F84B0E",boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:"space-between"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={photo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
        <Typography sx={{marginLeft:"10%",width:"150px"}}>{username}</Typography>
        </Box>
        <Box  >
           
        <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={displaysectionhistory }
          >
            <MenuIcon />
          </IconButton>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
           
          >
            <AccountCircleRoundedIcon/>
          </IconButton>
          
        </Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MessageBar;
