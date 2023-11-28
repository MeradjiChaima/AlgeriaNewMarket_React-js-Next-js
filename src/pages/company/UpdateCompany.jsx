import React , {useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider , styled } from '@mui/material/styles';
import UpdateFabrication from './pages/UpdateFabrication';
import UpdateCertification from './pages/UpdateCertification';
import UpdateExportation from './pages/UpdateExportation';
import UpdateCompanyProfile from './pages/UpdateCompanyProfile';



/****************Styling buttons ******************************************** */
const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  backgroundColor: 'rgba(217, 217, 217, 1)',
  color: 'rgba(5, 28, 78, 1)', 
  fontFamily: 'Raleway, sans-serif', 
  fontSize: '80%', 
  textDecoration: 'none', 
  padding:'3%',
  
  '&.Mui-selected': {
    borderBottom: `8px solid rgba(248, 75, 14, 1)`, 
    textDecoration: 'none',
    color: 'rgba(5, 28, 78, 1)', 
    
  },
}));
const StyledBottomNavigation = styled(BottomNavigation)({
  display: 'flex', 
  gap: '2%', 
  marginBottom:'40px', 
});


export default function UpdateCompany() {


/***********Selectionner le bouton ************************************* */
    const [activeButton, setActiveButton] = useState(0); 

  const handleButtonClick = (event, newValue) => {
    setActiveButton(newValue);
  };
/************************************************************************ */  





  return (
    <>
      <ThemeProvider theme={createTheme()}>
      <StyledBottomNavigation
        value={activeButton}
        onChange={handleButtonClick}
        showLabels
      >
        <StyledBottomNavigationAction label="Profile de l’entreprise" />
        <StyledBottomNavigationAction label="Fabrication" />
        <StyledBottomNavigationAction label="Capacité d’exportation"/>
        <StyledBottomNavigationAction label="Centre de certification et d’Agrément" />
      </StyledBottomNavigation>
    </ThemeProvider>

    {activeButton===0 && (
      
    <UpdateCompanyProfile/>
    )
    }
    {activeButton===1 && (
      
      <UpdateFabrication/>
      )
      }
      {activeButton===2 && (
       <UpdateExportation/>
      
      )
      }
      {activeButton===3 && (
      
      
      <UpdateCertification/>
      )
      }
    </>
  )
}


