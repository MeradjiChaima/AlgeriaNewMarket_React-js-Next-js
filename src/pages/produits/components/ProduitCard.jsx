import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const styletitle = {
  color: "gray",
  fontSize: "25px",
  fontWeight: "bold",
  marginLeft: "20PX",
  // fontFamily: 'Poppins',
};

function Gridrow({ title, srcImage1, srcImage2, srcImage3 }) {
  return (
    <Grid container spacing={2} paddingTop={1.5}>
      <Grid item xs={12} sm container spacing={0.1}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={styletitle}
        >
          {title}
        </Typography>
      </Grid>
      <Grid container item spacing={3} justifyContent="center">
        <Grid item>
          <ButtonBase sx={{ width: 172, height: 169 }}>
            <Img alt="image" src={srcImage1} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 172, height: 169 }}>
            <Img alt="image" src={srcImage2} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 172, height: 169 }}>
            <Img alt="image" src={srcImage3} />
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function ProduitCard({ marche }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 637,
        maxHeight: 812,
        flexGrow: 1,
        borderRadius: "3%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Gridrow
        title="Textil et Broderie"
        srcImage1=""
        srcImage2=""
        srcImage3=""
      />{" "}
      {/*<-------- images url */}
      <Gridrow title="Poterie" srcImage1="" srcImage2="" srcImage3="" />{" "}
      {/*<-------- images url */}
      <Gridrow title="Bijoux" srcImage1="" srcImage2="" srcImage3="" />{" "}
      {/*<-------- images url */}
      <Grid
        item
        xs={12}
        sm
        container
        spacing={0.1}
        justifyContent="center"
        paddingTop={0.75}
        paddingBottom={1}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={styletitle}
        >
          {marche} {/* if international or national */}
        </Typography>
      </Grid>
    </Paper>
  );
}
