import React, { useState, useEffect } from "react";
import DateInput from "../components/DateInput";
import TextFieldComponent from "../../../shared/components/TextField";
import { Box, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";
import ImageUploader from "../../../shared/components/ImageUploader";
import IgnoreButton from "../../../shared/components/IgnoreButton";
import OrangeCheckBox from "../../../shared/components/OrangeCheckBox"
import CustomButton from "../../../shared/components/CustomButton";


const Page4 = () => {

  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  //pour le check box
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  //pour ajouter image
  const limit = 4;
  const importimages = (imag) => {
    console.log(imag);
  }


  // Function to handle checkbox change
  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };

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
            {/*  box d'information de certification, toutes les component sont centralisez, la distance entre les component est 40px*/}
            <Box
              sx={{
                width: "100%",
                height: "30%",
                padding: "2%",
              }}
            >
              {/* nom et prenom de titulaire */}
              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="titulaire-certificat"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Titulaire du certificat:
                </label>
                <TextFieldComponent sparkholder="Nom - Prenom" />
              </div>
              {/* numero de certaficat */}
              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="numero-certificat"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Numéro de certificat:
                </label>
                <TextFieldComponent sparkholder="numero-certificat" />
              </div>
              {/* nom de certaficat */}
              <div>
                <div
                  style={{
                    display: isMobile ? undefined : "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <label
                    htmlFor="nom-certificat"
                    style={{
                      width: "200px",
                      textAlign: "right",
                      marginRight: "10px",
                      color: "#051C4E",
                    }}
                  >
                    Nom de certificat:
                  </label>
                  <TextFieldComponent sparkholder="nom-certificat" />
                </div>
                <div
                  style={{
                    fontSize: "small",
                    color: "#777",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: isMobile ? 20 : "10px",
                    marginLeft: isMobile ? undefined : "210px",
                    paddingTop: 5
                  }}
                >
                  Veuillez sélectionner exactement en fonction du nom réel du
                  certificat sur le certificat. S’il n’y a pas de nom de
                  certificat applicable, veuillez vérifier la documentation et
                  donner votre avis au besoin, les certificats seront
                  régulièrement mis à jour dans les options déroulantes.
                </div>
              </div>
              {/* date d'emission */}
              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="date-emission"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Date d'émission:
                </label>
                <DateInput id="date-emission" label="Sélectionner une date" />
              </div>
              {/* date d'expiration */}
              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="date-expiration"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Date d'expiration:
                </label>
                <DateInput id="date-expiration" label="Sélectionner une date" />
              </div>
              {/* Upload a picture */}

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <label
                  htmlFor="image-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "20px",
                    color: "#051C4E",
                  }}
                >
                  Image de certaficat:
                </label>
                <ImageUploader importimages={importimages} limit={limit} />
              </div>

              {/*fin de box 1 :information de certification */}
            </Box>

            {/* trai de separation entre les deux parties */}
            <Box>
              <hr style={{ borderTop: '1px solid #A7A7A7', margin: '10px 0' }} />
            </Box>
            {/* *************** */}

            {/* partie2 */}
            <Box
              sx={{
                width: "100%",
                height: "30%",
                padding: "2%",
              }}
            >
              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >

                <label
                  htmlFor="titulaire-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Titulaire de l'agrément:
                </label>
                <TextFieldComponent sparkholder="titulaire-agrement" />
              </div>

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="numero-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Numéro de l'agrément:
                </label>
                <TextFieldComponent sparkholder="numero-agrement" />
              </div>
              <div>
                <div
                  style={{
                    display: isMobile ? undefined : "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <label
                    htmlFor="nom-certificat"
                    style={{
                      width: "200px",
                      textAlign: "right",
                      marginRight: "10px",
                      color: "#051C4E",
                    }}
                  >
                    Nom de certificat:
                  </label>
                  <TextFieldComponent sparkholder="nom-certificat" />
                </div>
                <div
                  style={{
                    fontSize: "small",
                    color: "#777",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: isMobile ? 20 : "10px",
                    marginLeft: isMobile ? undefined : "210px",
                    paddingTop: 5
                  }}
                >
                  Veuillez sélectionner exactement en fonction du nom réel du
                  certificat sur le certificat. S’il n’y a pas de nom de
                  certificat applicable, veuillez vérifier la documentation et
                  donner votre avis au besoin, les certificats seront
                  régulièrement mis à jour dans les options déroulantes.
                </div>
              </div>

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "40px",
                }}
              >
                <label
                  htmlFor="date-emission-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Date d'émission:
                </label>
                <DateInput id="date-emission-agrement" label="Sélectionner une date" />
              </div>

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <label
                  htmlFor="date-expiration-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "10px",
                    color: "#051C4E",
                  }}
                >
                  Date d'expiration:
                </label>
                <DateInput id="date-expiration-agrement" label="Sélectionner une date" />
              </div>

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: isMobile ? 30 : "10px",
                }}
              >
                <label
                  htmlFor="image-agrement"
                  style={{
                    width: "200px",
                    textAlign: "right",
                    marginRight: "20px",
                    color: "#051C4E",
                  }}
                >
                  Image de l'agrément:
                </label>
                <ImageUploader importimages={importimages} limit={limit} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  color: "#051C4E",
                }}
              >
                <OrangeCheckBox
                  checked={isCheckboxChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="agree-checkbox">
                  I agree to the Marketplace terms and conditions
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Page4;