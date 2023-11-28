import {useState} from 'react'
import { Button ,Box , useMediaQuery, useTheme,}  from '@mui/material';
import Edit from '../assets/Edit.png';
import { useEditing } from '../Functions'; 
import {CertificationCenterData} from '../data.js'
import DateInput from "./DateInput";
import ImageUploader from "../../../shared/components/ImageUploader";
import CssTextField from "./CssTextfield";
import dayjs from 'dayjs'; 

function UpdateCertificationCenter() {

    // reglage de la taille des composants selon l'ecran (responsive)
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  //pour ajouter image
  const limit = 4;
  const importimages = (imag) => {
    console.log(imag);
  }

    const [Data , setData ] = useState(CertificationCenterData[0]) ;  
  const { isEditing : isEditing1 , handleEditClick : Edit1, handleCancelClick:Cancel1, handleSaveClick:Save1 } = useEditing(false , Data );
  return (
    <>
    {!isEditing1 && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={Edit1}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
        )}
                       
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
                
                <CssTextField  label="Nom - Prénom" id="custom-css-outlined-input" size="small"
        
        value={Data.tutaire}
        onChange={(e) => setData({ ...Data, tutaire : e.target.value })}
        disabled={!isEditing1}
        
      />
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
                <CssTextField  label="Numero certificat " id="custom-css-outlined-input" size="small"
        
        value={Data.num_registre}
        onChange={(e) => setData({ ...Data, num_registre : e.target.value })}
        disabled={!isEditing1}
        
      />
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
                  <CssTextField  label="Nom certificat" id="custom-css-outlined-input" size="small"
        
        value={Data.nom_registre}
        onChange={(e) => setData({ ...Data, nom_registre: e.target.value })}
        disabled={!isEditing1}
        
      />
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
                <DateInput
  id="date-emission"
  label="Sélectionner une date"
  disabled={!isEditing1} 
  initialDate={dayjs('2020-01-20')} 
/>
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
                <DateInput id="date-expiration" label="Sélectionner une date" 
                disabled={!isEditing1} 
                initialDate={dayjs('2020-01-20')} />
              </div>
              {/* Upload a picture */}

              <div
                style={{
                  display: isMobile ? undefined : "flex",
                  alignItems: "center",
                  marginBottom: "10px"
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
               
                <ImageUploader importimages={importimages} limit={limit} initialImages={Data.images} disabled={!isEditing1} />
                
              </div>

              {/*fin de box 1 :information de certification */}
            </Box>            

                        {isEditing1  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Cancel1}>Annuler</Button>
          <Button style={{
            background:'rgba(0, 212, 8, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Save1}>Modifier</Button>
                          </div> )} 

    </>
  )
}

export default UpdateCertificationCenter
