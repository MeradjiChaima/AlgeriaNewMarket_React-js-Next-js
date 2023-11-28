import {useState} from 'react'
import { FabricationData } from '../data';
import { useEditing } from '../Functions';
import CssTextField from "../components/CssTextfield"; 
import ImageUploader from '../../../shared/components/ImageUploader'
import UpgradeButton from '../../../shared/components/UpgradeButton'
import Grid from '@mui/material/Grid';
import {useMediaQuery, useTheme ,  Button , Typography } from '@mui/material';
import Edit from '../assets/Edit.png'
function UpdateFabrication() {
  const [FabricationFields , setFabricationFields  ] = useState(FabricationData[0]) ;  
  const { isEditing , handleEditClick , handleCancelClick , handleSaveClick} = useEditing(false);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const limit = 4;
const importimages = (imag) => {
  console.log(imag);
}
  return (
    <>
         {!isEditing && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={handleEditClick}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
      )}
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 2 }} direction={isMobile ? 'column' : undefined}>
              <Grid container item xs={5.5} justifyContent={isMobile ? undefined : "flex-end" } >
              <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              Adresse usine :
            </Typography>
               
              </Grid>
              <Grid item xs={5}>
              <CssTextField  label="Adresse usine " id="custom-css-outlined-input" size="small"
        
        value={FabricationFields.adresse}
        onChange={(e) => setFabricationFields({ ...FabricationFields, adresse: e.target.value })}
        disabled={!isEditing}
        
      />
              </Grid>
              <Grid container item xs={5.5} justifyContent={isMobile ? undefined : "flex-end"}>
              <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              Taille de l’usine :
            </Typography>
              </Grid>
              <Grid item xs={5}>
              <CssTextField  label="Taille de l’usine : " id="custom-css-outlined-input" size="small"
        
        value={FabricationFields.taille}
        onChange={(e) => setFabricationFields({ ...FabricationFields, taille: e.target.value })}
        disabled={!isEditing}
        />
              </Grid>



              <Grid container item xs={5.5} justifyContent={isMobile ? undefined : "flex-end"}>
              <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              No de lignes de production :
            </Typography>
              </Grid>
              <Grid item xs={5}>
              <CssTextField  label="No de lignes de production : " id="custom-css-outlined-input" size="small"
        
        value={FabricationFields.nb_ligne}
        onChange={(e) => setFabricationFields({ ...FabricationFields, nb_ligne: e.target.value })}
        disabled={!isEditing}
        />
              </Grid>



              <Grid container item xs={5.5} justifyContent={isMobile ? undefined : "flex-end"}>
                <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              Valeur de production annuelle :
            </Typography>
              </Grid>
              <Grid item xs={5}>
              <CssTextField  label="Valeur de production annuelle :" id="custom-css-outlined-input" size="small"
        
        value={FabricationFields.valeur}
        onChange={(e) => setFabricationFields({ ...FabricationFields, valeur : e.target.value })}
        disabled={!isEditing}
        />
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
                <Typography style={{
                  color: 'rgba(5, 28, 78, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 16px',
                  fontWeight: 'bold',
                }}>
                  Photos et vidéos de l'usine : </Typography>
                  <ImageUploader importimages={importimages} limit={limit} initialImages={FabricationFields.images} disabled={!isEditing} />
                 
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
                <Typography style={{
                  color: 'rgba(248, 75, 14, 1)',
                  fontFamily: 'Raleway , sans',
                  fontSize: ' 12px',
                  fontWeight: 'bold'
                }}>Upgrade pour ajouter des autres</Typography>
                <div>
                  <UpgradeButton />
                </div>
              </div>
            )}
              
              {isEditing  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={handleCancelClick}>Annuler</Button>
          <Button style={{
            background:'rgba(0, 212, 8, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={handleSaveClick}>Modifier</Button>
        </div> )} 
            

    </>
  )
}

export default UpdateFabrication
