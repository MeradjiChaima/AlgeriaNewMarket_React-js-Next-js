import * as React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Listmes from './Listmes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}




export default function ActionButtons({clickedconversation}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const mytheme = createTheme({
    palette: {
      primary: {
        main: '#1976D2', // This is the default primary color
      },
      secondary: {
        main: '#F84B0E', // This is the default secondary color
      },
      customColor: {
        main: '#F84B0E', // This is your custom color
      },
    },
  });
  

 
  
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: "100%",
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default" sx={{boxShadow:"none"}}>
        <ThemeProvider theme={mytheme}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
         
          variant="fullWidth"
          aria-label="action tabs example"
        >

          <Tab label="Tous"   />
          <Tab label="Non lu"  />
         
        </Tabs>
        </ThemeProvider>
      </AppBar>
      <SwiperSlide
    
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChange={handleChangeIndex}
      >
        <TabPanel sx={{height:"400px",overflowY:"auto"}} value={value} index={0} dir={theme.direction}>
          <Listmes clickedconversation={clickedconversation}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        vide
        </TabPanel>
        
      </SwiperSlide>
      
    </Box>
  );
}
