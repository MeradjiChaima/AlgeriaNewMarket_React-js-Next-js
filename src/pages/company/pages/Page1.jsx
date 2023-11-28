import * as React from "react";
import "./Page1.css";
import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Dropdown from '../../../shared/components/Dropdown';
import BlueCheckbox from "../components/BlueCheckBox";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DiamondIcon from '@mui/icons-material/Diamond';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Expositionsection from "../components/Expositionsection";
import ImageUploader from "../../../shared/components/ImageUploader";
import CssTextField from "../components/CssTextfield";
import { useState, useEffect } from "react";
import StyledTextarea from "../components/StyledTextarea";

function Page1() {

  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const limit = 4;
  const premium = false;
  const limitsections = 3;
  const [numbersections, setnumbersections] = useState(1);
  const importimages = (imag) => {
    console.log(imag);
  }
  useEffect(() => {
    if (numbersections === limitsections) {
      const plus = document.getElementById("plus");
      plus.style.display = "none";
    }
  }, [numbersections]);

  function adddiv() {
    setnumbersections(numbersections + 1);
  }


  const testt = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'BTC', label: 'BTC' },
    { value: 'JPY', label: 'JPY' },
  ];

  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      {/* effacer les titres a gauches si l'utilisateur est sur telephone */}
      {!isMobileOrTablet && (
        < Grid container item xs={2} textAlign='center'>
          <span style={{ marginTop: 10 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Informations d’entreprise
            </Typography> </span>

          <span style={{ marginTop: -50 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Information Contact
            </Typography>
          </span>

          <span style={{ marginTop: -250 }}>
            <Typography variant="body1" sx={{ fontFamily: "Raleway", color: "#051C4E", textDecorationLine: "underline" }} gutterBottom>
              Information Activité
            </Typography>
          </span>

          <span style={{ marginTop: -450 }}>
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
          {/* partie1 */}
          <Stack direction="row" sx={{ width: "100%", alignItems: "center", paddingTop: "1%" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              Nom de l'entreprise :
            </Typography>

            <CssTextField label="Veuillez entrer le nom complet de l’entreprise" id="custom-css-outlined-input" size="small" />


          </Stack>
          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Adresse :
            </Typography>

            <br />
          </Stack>
          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Rue :
            </Typography>
            <CssTextField label="Rue" id="custom-css-outlined-input" size="small" />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center", marginBottom: "0.5%" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Ville :
            </Typography>
            <Dropdown list={testt} label='Année'  />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Code postal :
            </Typography>
            <CssTextField label="Codepostal" id="custom-css-outlined-input" size="small" />
          </Stack>


          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Pays/Région :
            </Typography>
            <CssTextField label="Pays/Région " id="custom-css-outlined-input" size="small" />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Site de l’entreprise :
            </Typography>
            <CssTextField label=" Site de l’entreprise  " id="custom-css-outlined-input" size="small" />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
            <Typography id="textline" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "80%", width: "25.5%"
            }} gutterBottom >
              Téléphone :
            </Typography>
            <CssTextField label="Téléphone  " id="custom-css-outlined-input" size="small" />
            <Typography sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "85%", width: "23%"
            }} gutterBottom >
              Fax :
            </Typography>
            <CssTextField label="Téléphone  " id="custom-css-outlined-input" size="small" />
          </Stack>

          <div id="rows" style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "1%" }} >
            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "90%"
              }} gutterBottom >
                Année de création  :
              </Typography>
              <Dropdown list={testt} label='Année'  />
            </div>

            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "90%"
              }} gutterBottom >
                Type d'entreprise  :
              </Typography>
              <Dropdown list={testt} label='Année'  />
            </div>

            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "85%"
              }} gutterBottom >
                Nombre d’employés :
              </Typography>
              <Dropdown list={testt} label='Année'  />
            </div>


          </div>

          {/* partie2 */}
          <div id="stack2" direction="row" style={{ display: "flex", paddingTop: 35 }}>
            <Stack id="stackcontact" direction="column" sx={{ width: "60%" }}>
              <Stack direction="row" sx={{ alignItems: "center", paddingTop: "2%" }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "39%"
                }} gutterBottom >
                  Contact légal :
                </Typography>

                <CssTextField label="Contact légal " id="custom-css-outlined-input" size="small" />
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Téléphone :
                </Typography>
                <CssTextField label="Téléphone" id="custom-css-outlined-input" size="small" />
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center", marginBottom: "0.5%" }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Mobile :
                </Typography>
                <CssTextField label="Mobile" id="custom-css-outlined-input" size="small" />
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center" }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Email :
                </Typography>
                <CssTextField label="Email " id="custom-css-outlined-input" size="small" />
              </Stack>

            </Stack>

            <Box id="logodiv" sx={{ alignItems: "start", display: "flex", width: "30%", paddingTop: "1%" }}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", fontSize: "90%", paddingTop: "4%", width: "50%"
              }} gutterBottom >
                Logo de l'entreprise :
              </Typography>
              <Box>
                <ImageUploader importimages={importimages} limit={1} />
              </Box>

            </Box>

          </div>

          {/* partie3 */}
          <Stack id="stack" direction="column" spacing={0} sx={{ width: "100%", paddingTop: 5 }}>
            <Stack direction="row" sx={{ width: "100%", alignItems: "center", paddingTop: "4%" }} spacing={4}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "23%"
              }} gutterBottom >
                Secteur d'activité :
              </Typography>

              <div id="check" style={{ display: "flex", alignItems: "center", width: "70%", gap: "2%" }}>
                <div id="checks" style={{ display: "flex", height: "30%", alignItems: "center", width: "50%" }}>
                  <BlueCheckbox labell='Agriculture'></BlueCheckbox>
                  <BlueCheckbox labell='Industry'></BlueCheckbox>

                </div>
                <div id="checks" style={{ display: "flex", height: "30%", alignItems: "center", width: "50%" }}>
                  <BlueCheckbox labell='Construction'></BlueCheckbox>
                  <BlueCheckbox labell='IT Solution'></BlueCheckbox>
                </div>

              </div>
            </Stack>

            <Stack direction="row" sx={{ width: "100%", paddingTop: 2 }} spacing={4}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
              }} gutterBottom >
                Type d'activité :
              </Typography>
              <Grid container columns={16} sx={{ width: "70%" }}>
                <Grid item xs={6} >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>
                    <h3 id="checktxt">Fabricant</h3>

                  </Stack>
                </Grid>
                <Grid item xs={8} >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>
                    <h3 id="checktxt">Bureau d’achat</h3>

                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>
                    <h3 id="checktxt">Fournisseur de services</h3>
                  </Stack>
                </Grid>
                <Grid item xs={6} >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>
                    <h3 id="checktxt">Ministère/Bureau...</h3>

                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>

                    <h3 id="checktxt">Service commercial</h3>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <BlueCheckbox></BlueCheckbox>
                    <h3 id="checktxt">Autre</h3>


                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Stack>

          {/* partie4 */}
          <Stack id="stack" direction="column" spacing={0}>
            <div id="descriptionbox" style={{ display: "flex", gap: "1%", width: "100%", paddingTop: "8%", paddingBottom: "1%" }} spacing={2}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontSize: "85%", fontWeight: 600, display: "flex", justifyContent: "end", width: "24%"
              }} gutterBottom >
                Description de l’entreprise :
              </Typography>

              <StyledTextarea aria-label="empty textarea" minRows={6} placeholder="Empty" />
            </div>

            <Stack direction="row" sx={{ width: "100%", paddingBottom: "2%" }} spacing={4}>

              <div id="rows" style={{ display: "flex", width: "100%" }} >
                <div id="imagebloc" style={{ width: "48%", marginLeft: "2%" }}>
                  <Typography sx={{
                    color: "#051C4E",
                    fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "40%"
                  }} gutterBottom >
                    Photo de l’entreprise :
                  </Typography>
                  <Box>
                    <ImageUploader importimages={importimages} limit={limit} />
                  </Box>
                </div>
                <div id="imagebloc" style={{ width: "48%", marginLeft: "2%" }}>
                  <Typography sx={{
                    color: "#051C4E",
                    fontFamily: "Raleway", fontWeight: 600, display: "flex", fontSize: "90%"
                  }} gutterBottom >
                    Vidéo sur l’entreprise :
                  </Typography>
                  {premium ? <ImageUploader importimages={importimages} limit={limit} /> :

                    <div style={{ pointerEvents: 'none', }}>

                      <ImageUploader importimages={importimages} limit={limit} />
                    </div>
                  }
                </div>
              </div>
            </Stack>

            <div id="expositionbox" style={{ display: "flex", width: "100%", paddingTop: 15 }} spacing={2}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "24%"
              }} gutterBottom >
                Expostions :
              </Typography>
              <Stack id="expo" direction="column" sx={{ width: "70%" }} >
                {Array.from({ length: numbersections }).map((_, index) => (

                  <div key={index}>
                    <Expositionsection />
                  </div>
                ))}

              </Stack>


            </div>
            <Stack spacing={2} direction="row" sx={{ width: "100%", justifyContent: "center", paddingTop: "2%" }} >
              <Button variant="outlined" startIcon={<DiamondIcon />} sx={{ borderRadius: "20px", color: "#FF8A00", borderColor: "#FF8A00" }}>
                Upgrade
              </Button>
              <Typography sx={{ fontFamily: "Raleway", color: "grey" }}>Nombre Limite des expositions est 15
                <Typography sx={{ color: "#F84B0E", size: "small" }}>upgrade pour ajouter des autres </Typography>
              </Typography>

            </Stack>
            <Box sx={{ width: "100%", justifyContent: "center", paddingTop: "2%", display: "flex" }}>
              <Button variant="outlined" id="plus" startIcon={<AddIcon />} onClick={adddiv} sx={{ borderRadius: "20px", width: "10%", color: "#FF8A00", borderColor: "#FF8A00" }}>

              </Button>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Page1;
