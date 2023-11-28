import {
  Paper,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import TextFieldComponent from "../../../shared/components/TextField";
import BlueCheckbox from "../../../shared/components/BlueCheckBox";
import Dropdown from "../../../shared/components/Dropdown";
import CustomButton from "../../../shared/components/CustomButton";
import { CheckBox } from "@mui/icons-material";

const certifications = ["FCC", "ROHS", "GS", "SGS", "UL", "CSA", "ISO"];

export default function Page2(ProductName) {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [nomProduit, setnomProduit] = useState("");
  const [motCle, setmotCle] = useState("");
  const [marque, setMarque] = useState("");
  const [enreg, setEnreg] = useState("");
  const [paysOrig, setPaysOrig] = useState("");
  const [modeleNo, setModeleNo] = useState("");
  const [groupe, setGroupe] = useState("");
  const [cerification, setSetifications] = useState([]);
  const [buttonEnabled, setbuttonEnabled] = useState(false);

  const testt = ["2021", "2022", "2023", "2024", "2025"];



  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          width: 1 / 1.2,
          flexGrow: 1,
          boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* The main container */}
        <Grid container spacing={2}>
          {/* Left section */}
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <Typography variant="h6" sx={{ marginRight: "1%" }}>
                Nom de produit:
              </Typography>
              <strong>Nom du produit</strong>
            </div>
            {/* Add other fields as needed */}
          </Grid>

          {/* Right section */}
          <Grid item xs={12}>
          {!isMobileOrTablet ? (<div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "60px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginRight: "8%", marginTop: "1%" }}
              >
                Mots clés:
              </Typography>
              <TextFieldComponent sparkholder="mot_1, mot_2, mot_3...." />
            </div>):(<div
               style={{
                display: "flex",
                flexDirection: "column", // Change the direction to column on smaller screens
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginRight: "4%", marginTop: "1%" }}
              >
                Mots clés:
              </Typography>
              <TextFieldComponent sparkholder="mot_1, mot_2, mot_3...." />
            </div>)}






            {!isMobileOrTablet ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "60px",
                  justifyContent: "space-between", // Add space between children
                }}
              >
                <Typography variant="h6" sx={{marginRight:'10%'}} >
                  Marque:
                </Typography>
                <Dropdown list={testt} label='Année'  />
                <Typography
                  variant="h6"
                  sx={{ marginRight: "3%", marginLeft: "5%", marginTop: "1%" }}
                >
                  Enregistrement:
                </Typography>
                <TextFieldComponent sparkholder="Enregistrement" />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // Arrange children vertically on smaller screens
                  alignItems: "center",
                  marginBottom: "60px",
                  justifyContent: "space-between", // Add space between children
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "2%" }}>
                  Marque:
                </Typography>
                <Dropdown list={testt} label='Année'  />
                <Typography variant="h6" sx={{ marginRight: "3%" }}>
                  Enregistrement:
                </Typography>
                <TextFieldComponent sparkholder="Enregistrement" />
              </div>
            )}

            {!isMobileOrTablet ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "60px",
                  justifyContent: "space-between", // Add space between children
                }}
              >
               
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "5px", // Add space between elements
                    }}
                  >
                    Pays d'origine:
                  </Typography>
                  <Dropdown list={testt} label='Année'  />
                

                
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "1%"  }}
                  >
                    Modèle no:
                  </Typography>
                  <TextFieldComponent sparkholder="45678765432345" />
                  </div>
              
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column", // Arrange children vertically on smaller screens
                  alignItems: "center",
                  marginBottom: "30px",
                  justifyContent: "space-between", // Add space between children
                }}
              >
                <Typography variant="h6" sx={{ marginRight: " 10%" }}>
                  Pays d'origine:
                </Typography>
                <Dropdown list={testt} label='Année'  />
                <Typography variant="h6" sx={{ marginRight: "12%" }}>
                  Modèle no:
                </Typography>
                <TextFieldComponent sparkholder="389433453" />
              </div>
            )}
            {!isMobileOrTablet ? (
            <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "60px",
                  justifyContent: "start", // Add space between children
                }}
            >
              <Typography variant="h6" sx={{ marginRight: "10%" }}>
                Groupe:
              </Typography>
              <TextFieldComponent sparkholder="Groupe du produit" />
            </div>):( <div
                 style={{
                  display: "flex",
                  flexDirection: "column", // Change the direction to column on smaller screens
                  alignItems: "center",
                  marginBottom: "40px",
                }}
            >
              <Typography variant="h6" sx={{ marginRight: "10%" }}>
                Groupe:
              </Typography>
              <TextFieldComponent sparkholder="Groupe du produit" />
            </div>)}
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                marginBottom: "40px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ marginRight: "10%", flex: "none" }}
              >
                Certifications:
              </Typography>

              <Grid container spacing={0.25}>
                {certifications.map((label, index) => (
                  <Grid
                    key={index} // Add key prop to the Grid component
                    sx={{ marginRight: "10%" }}
                    item
                    xs={6}
                    sm={5}
                    md={3}
                    lg={2}
                  >
                    <BlueCheckbox
                      key={index}
                      labell={label} // Correct the prop name from 'labell' to 'label'
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/* Button at the bottom */}
        <div style={{ width: "100%", textAlign: "right" }}>
          <CustomButton size="large" variant="contained" disabled>
            Suivant
          </CustomButton>
        </div>
      </Paper>
    </>
  );
}
