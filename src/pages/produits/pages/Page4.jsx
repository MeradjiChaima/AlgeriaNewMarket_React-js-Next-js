import React from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RadioButtons from "../../../shared/components/RadioComponent";
import Dropdown from "../../../shared/components/Dropdown";
import BlueCheckbox from "../../../shared/components/BlueCheckBox";

import QuantityCard from "../components/quantityCard";

export default function Page4() {
  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textstyle = {
    color: "#666668",
    //fontFamily: 'Poppins',
    fontSize: "15px",
  };

  const stylelabel = {
    color: "#051C4E",
    fontWeight: "bold",
    fontSize: "16px",
    //fontFamily: 'Raleway',
    paddingTop: 10,
    paddingLeft: 10,
  };

  const radiotextstyle = {
    color: "gray",
    //fontFamily: 'Open Sans',
    fontSize: "16px",
  };


  const testt = ["2021", "2022", "2023", "2024", "2025"];

  return (
    // Page exterieure
    <Paper
      elevation={2}
      sx={{
        margin: 'auto',
        padding: isMobile ? 2 : 4,
        flexGrow: 1,
        width: 1 / 1.2,
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* texte explicatif du debut */}
      <Typography style={textstyle}>
        Des informations commerciales complètes aident les acheteurs à prendre
        de meilleures décisions d'approvisionnement
      </Typography>
      <Grid
        container
        padding={isMobile ? 3 : 5}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction={isMobileOrTablet ? "column" : undefined}
      >
        <Grid container item xs={3} justifyContent="flex-start">
          <Typography style={stylelabel}>Fixation des prix : </Typography>
        </Grid>
        <Grid container item xs={7}>
          <Typography sx={{ marginTop: "7px" }} style={radiotextstyle}>
            {!isMobileOrTablet ? (
              <>
                <RadioButtons />
                Définir le prix uniforme du FOB
                <span style={{ marginLeft: "50px" }}>
                  <RadioButtons />
                  Définir un prix FOB
                </span>
              </>
            ) : (
              <>
                <RadioButtons />
                Définir le prix uniforme du FOB <br />
                <RadioButtons />
                Définir un prix FOB
              </>
            )}
          </Typography>
        </Grid>
        <Grid container item xs={3} justifyContent="flex-start">
          <Typography style={stylelabel}>Unité : </Typography>
        </Grid>
        <Grid container item xs={7}>
        <Dropdown list={testt} label='Année'  />
        </Grid>
        <Grid container item xs={3} justifyContent="flex-start">
          <Typography style={stylelabel}>Quantité Prix : </Typography>
        </Grid>
        <Grid container item xs={7}>
          {/* Partie de la carte  */}
          <QuantityCard></QuantityCard>
        </Grid>
        <Grid container item xs={3} justifyContent="flex-start">
          <Typography style={stylelabel}>Modalité de paiement :</Typography>
        </Grid>
        <Grid container item xs={7}>
          {!isMobileOrTablet ? (
            <>
              <BlueCheckbox labell="L/C" />
              <span style={{ marginLeft: "20px" }}>
                <BlueCheckbox labell="D/A" />
              </span>
              <span style={{ marginLeft: "20px" }}>
                <BlueCheckbox labell="D/P" />
              </span>
              <span style={{ marginLeft: "20px" }}>
                <BlueCheckbox labell="T/T" />
              </span>
              <span style={{ marginLeft: "20px" }}>
                <BlueCheckbox labell="MoneyGram" />
              </span>
              <BlueCheckbox labell="WesternUnion" />
            </>
          ) : (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={7}>
                <BlueCheckbox labell="L/C" />
              </Grid>
              <Grid item xs={3}>
                <BlueCheckbox labell="D/A" />
              </Grid>
              <Grid item xs={7}>
                <BlueCheckbox labell="D/P" />
              </Grid>
              <Grid item xs={3}>
                <BlueCheckbox labell="T/T" />
              </Grid>
              <Grid item xs={7}>
                <BlueCheckbox labell="MoneyGram" />
              </Grid>
              <Grid item xs={3}>
                <BlueCheckbox labell="WesternUnion" />
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid container item xs={3}></Grid>
        <Grid container item xs={7}>
        <Dropdown list={testt} label='Année'  />
          <span style={{ marginLeft: "20px" }}>
            <Button sx={{ backgroundColor: "#D9D9D9", color: "black" }}>
              ADD
            </Button>
          </span>
        </Grid>
      </Grid>
    </Paper>
  );
}
