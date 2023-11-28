import "./Page1.css";
import { Paper, useMediaQuery , useTheme } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import UpdateCompanyInfos from "../components/UpdateCompanyInfos";
import UpdateContactsInfos from "../components/UpdateContactsInfos";
import UpdateCompanyActivity from "../components/UpdateCompanyActivity";
import UpdateCompanyPresentation from "../components/UpdateCompanyPresentation";

function UpdateCompanyProfile() {



  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  

  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      {/* effacer les titres a gauches si l'utilisateur est sur telephone */}
      {!isMobileOrTablet && (
        < Grid container item xs={2} textAlign='center'>
          <span style={{ marginTop: 10 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Informations d’entreprise
            </Typography> </span>

          <span style={{ marginTop: -80 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Information Contact
            </Typography>
          </span>

          <span style={{ marginTop: -450 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Information Activité
            </Typography>
          </span>

          <span style={{ marginTop: -800}}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Présentation de l’entreprise
            </Typography>
          </span>

        </Grid>
      )}


      <Grid xs={15} sm={10} sx={{ width: "100%" }}>
        <Paper
          elevation={2}
          sx={{
            margin: 1,
            padding: isMobile ? 2 : 3,
            flexGrow: 1,
            width: '100%',
            borderRadius: 5,
          }}
        >


          {/* partie1 : Profile de l'entreprise  */}
                  <UpdateCompanyInfos/>


          {/* partie2 : Contacts infos */}
                 <UpdateContactsInfos/>





          {/* partie3 : Activités d'entreprise */}
                  <UpdateCompanyActivity/>


          {/* partie4 : presentation de l'entreprise  */}

                 <UpdateCompanyPresentation/>
         
        </Paper>
      </Grid>
    </Grid>
  );
}

export default UpdateCompanyProfile;
