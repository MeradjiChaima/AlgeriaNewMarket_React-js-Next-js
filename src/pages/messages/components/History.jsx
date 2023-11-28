import * as React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled, alpha } from '@mui/material/styles';
import Listmes from './Listmes';
import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ListFichier from './ListFichier';
import { Avatar } from '@mui/material';
import ListCart from './ListCart';
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




export default function History() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "15px",
    border: '1px solid', 
    borderColor:"rgba(60, 60, 67, 0.2)",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
   
    '&:hover': {
      backgroundColor: "rgba(60, 60, 67, 0.1)",
     
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    borderColor:"black",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
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
      <AppBar position="static" color="default" sx={{boxShadow:"none",width:"100%"}}>
        <ThemeProvider theme={mytheme}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          
          
        
        >

          <Tab  label="Recherche"sx={{width:10}}   />
          <Tab label="Fichiers" sx={{width:10}}    />
          <Tab label="Cartes" sx={{width:10}}  />
         
        </Tabs>
        </ThemeProvider>
      </AppBar>
      <SwiperSlide
    
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel sx={{height:"400px",overflowY:"auto",overflowX:"hidden",width:"100%"}} value={value} index={0} dir={theme.direction}>

        <Box sx={{marginBottom:"8%" ,width:"100%"}} >
       <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             inputProps={{ 'aria-label': 'search' }}
              placeholder="Search…"
            
            />
          </Search>
       </Box>
       

        </TabPanel>


        <TabPanel value={value} index={1} dir={theme.direction}>
        <ListFichier/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ListCart/>
        </TabPanel>
        
      </SwiperSlide>
      
    </Box>
  );
}
