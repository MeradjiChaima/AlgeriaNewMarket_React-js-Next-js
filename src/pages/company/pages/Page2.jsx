import React, { useState } from 'react'
import ImageUploader from '../../../shared/components/ImageUploader'
import TextFieldHiddenLabel from '../../../shared/components/TextFieldHiddenLabel'
import UpgradeButton from '../../../shared/components/UpgradeButton'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CustomButton from '../../../shared/components/CustomButton';
import Grid from '@mui/material/Grid';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import ButtonSwitch from '../components/buttonSwitch';

/*********************Fonctions images*********************** */
const limit = 4;
const importimages = (imag) => {
  console.log(imag);
}
/*********************************************************** */



export default function Page2() {

  // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  /***************Fonctions Processus card******************************* */
  const [cards, setCards] = useState([1]);
  const handleAddCard = () => {
    //controler le numero de processus cards
    if (cards.length < 15) {
      const lastIndex = cards[cards.length - 1];
      setCards([...cards, lastIndex + 1]);
    }
  };
  const handleRemoveCard = (index) => {
    //Supprimer une card 
    setCards((prevCards) => prevCards.filter((cardIndex) => cardIndex !== index));
  };
  /*********************************************************** */

  return (

    <div style={{
      display: 'flex ',
      flexDirection: 'row',
      justifyContent: 'start',
      gap: '10%'
    }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {!isMobileOrTablet && (
          < Grid container item xs={2} justifyContent='center'>
            <p style={{
              color: 'rgba(5, 28, 78, 1)',
              fontFamily: 'Raleway , sans',
              fontSize: ' 19px',
              textDecoration: 'underline',
              fontWeight: 'bold',
              paddingTop: 5,
              '@media (max-width:780px)': {
                display: 'none',
              },
            }}>
              Fabrication</p>
          </Grid>
        )}
        <Grid xs={15} sm={10} sx={{ width: "100%" }}>
          <Paper
            elevation={2}
            sx={{
              margin: 1,
              padding: isMobile ? 2 : 3,
              justifyContent: 'center',
              flexGrow: 1,
              width: '100%',
              borderRadius: 5,
            }}
          >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobile ? 'column' : undefined}>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <p style={{
                  color: 'red',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 20px',
                  fontWeight: 'bold'
                }}>*</p>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold'
                }}>
                  Adresse usine :</p>
              </Grid>
              <Grid item xs={7}>
                <TextFieldHiddenLabel sparkholder="Adresse..." />
              </Grid>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <p style={{
                  color: 'red',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 20px',
                  fontWeight: 'bold'
                }}>*</p>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold'
                }}>
                  Taille de l'usine :</p>
              </Grid>
              <Grid item xs={7}>
                <TextFieldHiddenLabel sparkholder="Taille..." />
              </Grid>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold'
                }}>
                  N° de ligne de production :</p>
              </Grid>
              <Grid item xs={7}>
                <TextFieldHiddenLabel sparkholder="N° de ligne..." />
              </Grid>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold'
                }}>
                  Valeur de production annuelle :</p>
              </Grid>
              <Grid item xs={7}>
                <TextFieldHiddenLabel sparkholder="Valeur annuelle..." />
              </Grid>
            </Grid>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 30,
              paddingBottom: 30,
              gap: '15%',
            }}>
              <div>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold',
                }}>
                  Photos de l'usine :</p>
                <ImageUploader importimages={importimages}
                  limit={limit} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
                <div>
                  <p style={{
                    color: 'rgba(5, 28, 78, 1)',
                    fontFamily: 'Raleway , sans',
                    fontSize: ' 16px',
                    fontWeight: 'bold'
                  }}>
                    Videos sur l'usine :</p>
                  <ImageUploader importimages={importimages}
                    limit={1} />
                </div>
                {!isMobileOrTablet && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5%'
                  }}>
                    <p style={{
                      color: 'rgba(248, 75, 14, 1)',
                      fontFamily: 'Raleway , sans',
                      fontSize: ' 12px',
                      fontWeight: 'bold'
                    }}>Upgrade pour ajouter des autres</p>
                    <div>
                      <UpgradeButton />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isMobileOrTablet && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 30,
                gap: '5%'
              }}>
                <p style={{
                  color: 'rgba(248, 75, 14, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 12px',
                  fontWeight: 'bold'
                }}>Upgrade pour ajouter des autres</p>
                <div>
                  <UpgradeButton />
                </div>
              </div>
            )}

            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobile ? 'column' : undefined}>
              <Grid container item xs={4.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <p style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold',
                }}>
                  Processus de fabrication :
                </p>
              </Grid>
              <Grid item xs={7}>
                {/* Partie de la carte */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4%',
                  width: isMobile ? '100%' : '80%',
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2%'
                  }}>
                    <p style={{
                      color: 'rgba(5, 28, 78, 1)',
                      fontFamily: 'Raleway , sans',
                      fontSize: ' 16px',
                      fontWeight: 'bold'
                    }}>Affichage</p>
                    <ButtonSwitch />
                  </div>
                  {cards.map((index) =>
                    <div key={index} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: '2%',
                    }}>
                      <div style={{
                        justifyContent: 'start',
                        gap: '10px',
                        padding: '2%',
                        boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.25)',
                        width: '100%',
                        borderRadius: '12px',
                      }}>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'end',
                        }}>
                          {index > 1 && (
                            <button onClick={() => handleRemoveCard(index)} style={{
                              color: 'red',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                            }}>
                              <DoDisturbOnIcon />
                            </button>
                          )}
                        </div>
                        <div style={{
                          display: 'flex ',
                          flexDirection: 'row',
                          justifyContent: 'start',
                          alignItems: 'center',
                          gap: '5%'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{
                              color: 'red',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 18px',
                              fontWeight: 'bold'
                            }}>*</p>
                            <p style={{
                              color: 'rgba(5, 28, 78, 1)',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 14px',
                              fontWeight: 'bold'
                            }}>
                              Nom processus :</p>
                          </div>
                          <TextFieldHiddenLabel sparkholder="Nom processus..." />
                        </div>
                        <div style={{
                          display: 'flex ',
                          flexDirection: 'column',
                          justifyContent: 'start',
                          gap: '10px'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{
                              color: 'red',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 18px',
                              fontWeight: 'bold'
                            }}>*</p>
                            <p style={{
                              color: 'rgba(5, 28, 78, 1)',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 14px',
                              fontWeight: 'bold'
                            }}>
                              Photos du processus :</p>
                          </div>
                          <ImageUploader importimages={importimages}
                            limit={limit} />
                        </div>
                        <div style={{
                          display: 'flex ',
                          flexDirection: 'column',
                          justifyContent: 'start',
                          gap: '10px'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{
                              color: 'red',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 18px',
                              fontWeight: 'bold'
                            }}>*</p>
                            <p style={{
                              color: 'rgba(5, 28, 78, 1)',
                              fontFamily: 'Raleway , sans',
                              fontSize: ' 14px',
                              fontWeight: 'bold'
                            }}>
                              Description du processus :</p>
                          </div>
                          <TextFieldHiddenLabel sparkholder="Description..." />
                        </div>
                      </div>
                    </div>
                  )}

                  {cards.length < 10 && (
                    <button onClick={handleAddCard} style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '2%',
                      fontSize: '13px',
                      color: 'rgba(0, 0, 0, 0.4)',
                      fontWeight: 'bold',
                    }}>
                      <AddBoxOutlinedIcon />
                      Nombre maximale de processus : 15
                    </button>
                  )}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
