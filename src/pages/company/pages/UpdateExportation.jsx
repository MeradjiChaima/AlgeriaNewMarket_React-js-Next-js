
import { Grid , Paper, Typography, useMediaQuery, useTheme ,Button } from '@mui/material';
import UpdateExportationInfos from '../components/UpdateExportationInfos';
import UpdateExportationConditions from '../components/UpdateExportationConditions';

export default function UpdateExportation() {

    // reglage de la taille des composants selon l'ecran (responsive)
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

   

    
    // labels exterieurs
    const stylelabel = {
        color: '#051C4E',
        fontWeight: 'bold',
        fontSize: '16px',
        fontFamily: 'Raleway',
        paddingTop: 10,
        paddingLeft: 10
    }

    
   
    
      
       
    return (
        <>
           
            <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {/* effacer les titres a gauches si l'utilisateur est sur telephone */}
                {!isMobileOrTablet && (
                    < Grid container item xs={2} textAlign='center'>

                        <Typography style={stylelabel} sx={{ textDecorationLine: "underline" }}>Information d’éxportation</Typography>
                        <span style={{ marginTop: 250}}>
                            <Typography style={stylelabel} sx={{ textDecorationLine: "underline" }}>Conditions d’éxportation</Typography>
                        </span>

                    </Grid>
                )}
                {/* */}
                <Grid xs={isMobile ? 12 : 10} sm={10}>
                    <Paper
                        elevation={2}
                        sx={{
                            margin: 1,
                            padding: isMobile ? 2 : 4,
                            flexGrow: 1,
                            width: '100%',
                            borderRadius: 5,
                        }}
                    >
                         {/*Infos d'exportation*/}

                         <UpdateExportationInfos/>


                        {/*Conditions d'exportation*/}
                        <UpdateExportationConditions/>
                         
                    </Paper>
                </Grid>
            </Grid >
        </>
    )
}
