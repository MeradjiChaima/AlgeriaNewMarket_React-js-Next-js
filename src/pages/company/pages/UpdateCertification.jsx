
import { Box, Paper, useMediaQuery, useTheme, Grid  } from "@mui/material";
import UpdateAgrementCenter from "../components/UpdateAgrementCenter";
import UpdateCertificationCenter from "../components/UpdateCertificationCenter";

const UpdateCertification = () => {

  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <div
      className="app-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {!isMobileOrTablet && (
          < Grid container item xs={2} textAlign='center'>
            {/* titre premiere partie  */}
            <h4
              style={{
                marginBottom: "10px",
                marginRight: "15px",
                textDecoration: "underline",
                color: "#051C4E",
                paddingTop: 10
              }}
            >
              Centre de Certification :
            </h4>

            {/* titre deuxieme partie  */}
            <h4
              style={{
                marginBottom: "10px",
                marginRight: "15px",
                textDecoration: "underline",
                color: "#051C4E",
              }}
            >
              *Centre De l'agrément :
            </h4>
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
            {/* partie 1 */}
            <UpdateCertificationCenter/>
            {/* trai de separation entre les deux parties */}
            <Box>
              <hr style={{ borderTop: '1px solid #A7A7A7', margin: '10px 0' }} />
            </Box>
            {/* *************** */}
      
            {/* partie2 */}
             <UpdateAgrementCenter/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default UpdateCertification;