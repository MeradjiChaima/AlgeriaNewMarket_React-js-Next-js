import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function CustomTabPanel({ children, index, value, ...other }) {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm')); // Adjust the breakpoint as needed
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
   
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px:isMobileOrTablet ? 1 : 3 ,py:1}}>
          <Typography
           
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const theme = useTheme();
const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm')); // Adjust the breakpoint as needed
const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
 sx={{
  display: "flex",
  justifyContent: "center", // Center the Tabs horizontally
  alignItems: "center",     // Center the Tabs vertically
  paddingTop: "10px",
  paddingLeft: !isMobileOrTablet ? '12px' : '-10px', // Adjust padding for mobile/tablet
  paddingRight: !isMobileOrTablet ? '12px' : '-10px', // Adjust padding for mobile/tablet
  boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
  margin: "auto",
  height: "100%",          // Fix the typo, change "hight" to "height"
  width: "80%"            // You can adjust this value for responsiveness
}}

>
<Tabs
  value={value}
  onChange={handleChange}
  aria-label="basic tabs example"
  TabIndicatorProps={{ style: { background: "#F84B0E", color: "#F84B0E" } }}
  textColor="Black"
  alignItems='center'
  
  
>
  <Tab
    label="Informations"
    {...a11yProps(0)}
    sx={{
      height: "70px" ,
      fontSize: isSmallerScreen ? '8px' : '24px', // Set font size based on screen size
    }} // Adjust the font size as needed
  />
  <Tab
    label="Description"
    {...a11yProps(1)}
    sx={{
      height: "70px" ,
      fontSize: isSmallerScreen ? '8px' : '24px', // Set font size based on screen size
    }} // Adjust the font size as needed
  />
  <Tab
    label="Echange"
    {...a11yProps(2)}
    sx={{
      height: "70px" ,
      fontSize: isSmallerScreen ? '8px' : '24px', // Set font size based on screen size
    }} // Adjust the font size as needed
    ></Tab>
  <Tab
    label="Logistique"
    {...a11yProps(3)}
    sx={{
      height: "70px" ,
      fontSize: isSmallerScreen ? '8px' : '24px', // Set font size based on screen size
    }} // Adjust the font size as needed
  />
</Tabs>

</Box>


      <CustomTabPanel value={value} index={0}>
        <Page2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Page3 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Page4 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div>Logistique</div>
      </CustomTabPanel>
    </>
  );
}
