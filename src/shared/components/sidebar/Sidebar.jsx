import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Content from './Content';
import { useRef } from 'react';
import { useContext } from 'react';
import { openSidebarContext } from '../../context/openSidebarContext';

const Sidebar = () => {

  const ref = useRef(null);
  const drawerWidth = '8%';
  const {mobileOpen, setMobileOpen} = useContext(openSidebarContext);

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Mobile version */}
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        ref={ref}
        container={container}
        variant="temporary"
        open={mobileOpen}
        // onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {/* width: '115px' is the width of the sidebar */}
        <div style={{width:'115px'}}>
          <Content />
        </div>
      </Drawer>

      {/* Web version */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
        open
      >
        {/* width: '115px' is the width of the sidebar */}
        <div style={{width:'115px'}}>
          <Content />
        </div>
      </Drawer>

      
    </Box>
  );
};

export default Sidebar;