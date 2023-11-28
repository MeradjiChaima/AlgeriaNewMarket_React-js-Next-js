import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, TextField, useMediaQuery, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function QuantityCard() {
  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const textstyle = {
    fontWeight: "bold",
    fontSize: "15px",
    //fontFamily: 'Open Sans',
    marginTop: 0,
    marginBottom: 10,
  };

  return (
    <Grid
      container
      spacing={2}
      marginTop={2}
      sx={{
        "--Grid-borderWidth": "1px",
        border: "var(--Grid-borderWidth) solid",
        borderColor: "black",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          "--Grid-borderWidth": "1px",
          border: "var(--Grid-borderWidth) solid",
          borderColor: "black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <Typography style={textstyle}>MOQ</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          "--Grid-borderWidth": "1px",
          border: "var(--Grid-borderWidth) solid",
          borderColor: "black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <Typography style={textstyle}>FOB</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          "--Grid-borderWidth": "1px",
          border: "var(--Grid-borderWidth) solid",
          borderColor: "black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <Typography style={textstyle}>Aperçu</Typography>
      </Grid>
      <Grid
        container
        item
        xs={4}
        sx={{ backgroundColor: "#F84B0E80", color: "white" }}
        justifyContent="center"
      >
        <Typography>
          ≥
          <span style={{ marginLeft: "20px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              sx={{
                width: isMobileOrTablet ? "60%" : "80%",
                marginBottom: 1,
                backgroundColor: "white",
              }}
            ></TextField>
          </span>
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={5}
        sx={{ backgroundColor: "#F84B0E80", color: "white" }}
        justifyContent="center"
      >
        <Typography>
          $
          <span style={{ marginLeft: "20px" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              sx={{
                width: isMobileOrTablet ? "40%" : "65%",
                marginBottom: 1,
                backgroundColor: "white",
              }}
            ></TextField>
          </span>
          <span style={{ marginLeft: "5px" }}>
            <DeleteIcon />
          </span>
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography style={textstyle}>Empty</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center" textAlign="center">
        <Typography style={textstyle}>
          <span style={{ color: "#051C4E" }}>Nouvelle fourchette de prix,</span>{" "}
          peut fixer le prix dans les 4
        </Typography>
      </Grid>
    </Grid>
  );
}
