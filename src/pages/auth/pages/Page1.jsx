/* eslint-disable no-unused-vars */
import React from 'react';
import Container from "@mui/material/Container"; // Import Container from MUI library
import Card from "@mui/material/Card"; // Import Card from MUI library
import Stack from "@mui/material/Stack"; // Import Stack from MUI library
import Box from "@mui/material/Box"; // Import Box from MUI library (if needed)
import Item from "@mui/material/Box"; // Import Item from MUI library (if needed)
import OtpPopUp from '../components/OtpPopUp';
import TextFielconstum from '../components/textefields';
import OrangeCheckBox from "../../../shared/components/OrangeCheckBox";
import CountrySelect from '../components/CostumContryTF';
import RadioActivity from '../components/radio_group';
import Typography from '@mui/material/Typography'; // Import Typography from MUI library
import MyReCaptcha from '../components/Captcha';
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const StackSI = (props) => {
  return <Stack sx={{ marginBottom: '16px' }}
  flexWrap="nowrap" justifyContent="end" marginLeft="3%" marginRight="7%" alignItems="center" direction="row" spacing={2}
 {...props} />;
};

//style of the text
const customTypography = {

      color: '#051C4E',
      fontFamily: 'Raleway',
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      height: '25px',
      justifyContent: 'center',
      flexShrink: 0,
    };


export default function Page1() { 
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    

      <Paper
            sx={{
                p: 4,
                maxWidth: 637,
                Height:500,
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
        <StackSI sx={{ marginTop: '58px', alignItems:"center" }}  >
            <Item sx={{position:"relative", alignContent:'end'}}>
            <Typography  sx={customTypography}>
                Nom légale  de l’entreprise :
                </Typography>
                </Item>
            <Item sx={{position:"relative",marginLeft:"50%",marginRight:"5%",}}>
            <TextFielconstum></TextFielconstum>
          </Item>
        </StackSI>

        <StackSI sx={{ marginTop: '28px', alignItems:"center" }}>
            <Item>
            <Typography  sx={customTypography}>
                Votre activité :
            </Typography>
            </Item>
           
            <Item>
              <RadioActivity/>
            </Item>

          
          
       
         
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }}>
          <Item>
          <Typography  sx={customTypography}>Login :
          </Typography>
          </Item>
          <Item>
          <TextFielconstum></TextFielconstum>
          </Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }} >
          <Item>
            
          <Typography  sx={customTypography}>Mot de passe :
          </Typography>
          </Item>
          <Item sx={{alignItems: 'start'}}><TextFielconstum></TextFielconstum></Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }} >
          <Item>
            
          <Typography  sx={customTypography}>Confirmer le mot de passe :
          </Typography>
          </Item>
          <Item sx={{alignItems: 'start'}}><TextFielconstum></TextFielconstum></Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }} >
          <Item>
          <Typography  sx={customTypography}>Nom  :
          </Typography>
          </Item>
          <Item><TextFielconstum></TextFielconstum></Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }} >
          <Item>
          <Typography  sx={customTypography}>Prénom  :
          </Typography>
          </Item>
          <Item><TextFielconstum></TextFielconstum></Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }} >
          <Item>
          <Typography  sx={customTypography}>Pays/Région :
          </Typography>
            </Item>
          <Item>
            <CountrySelect/>
            </Item>
        </StackSI>
        <StackSI sx={{ marginTop: '28px' }}  >
          <Item>
          <Typography sx={customTypography}>Téléphone :
          </Typography>
          </Item>
          <Item><TextFielconstum></TextFielconstum></Item>
        </StackSI>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: '28px' ,marginLeft:"20%"}}  >
          <Item>
          <MyReCaptcha/>
          </Item>
         
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: '28px' ,marginLeft:"10%"}}  >
            <Item
            >
                <OrangeCheckBox/>
            </Item>
          <Item>

          <Typography  sx={{
        color: '#051C4E',
        fontFamily: 'Raleway',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',}}> I agree on  the Marketplace terms and policy.
          </Typography>
          </Item>
         
        </Stack>

        <Stack spacing={1} alignItems="center" sx={{ marginTop: '28px' }}  >
          <Item>
          <OtpPopUp/>
          </Item>
         
        </Stack>

        
      </Paper>
        {isLgScreen && <Card sx={{width: "353px", height: "1000px", backgroundColor: "rgba(248, 75, 14, 0.78)"}}>
        {/* Add the Typography component here*/ }
        <Typography
        variant="h1"
        sx={{
            marginTop: '100%',
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontSize: '45px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '167.5%',
        }}
      >
          S'inscrire gratuitement
        </Typography>
      </Card>}
    </Container>
  );
}