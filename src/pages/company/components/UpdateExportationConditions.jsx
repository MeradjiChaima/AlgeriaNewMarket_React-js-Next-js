import { useState} from 'react';
import Grid from '@mui/material/Grid';
import { Typography ,Button , Box ,useMediaQuery, useTheme} from '@mui/material';
import Edit from '../assets/Edit.png'; 
import {useEditing} from '../Functions'; 
import CheckList from '../components/Checklist';
import { ExportationCondition , langueOptions , paimentOptions , deviseOptions , livraisonOptions } from '../data';
const stylelabel = {
  color: '#051C4E',
  fontWeight: 'bold',
  fontSize: '16px',
  fontFamily: 'Raleway',
  paddingTop: 10,
  paddingLeft: 10
}
function UpdateExportationConditions() {
  const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [Data , setData ] = useState(ExportationCondition) ;  
  const { isEditing : isEditing2 , handleEditClick : Edit2, handleCancelClick:Cancel2, handleSaveClick:Save2 } = useEditing(false , Data );
  return (
    <>
     {!isEditing2 && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={Edit2}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
                         )}


                        <Grid xs={12} sm={10}>
                            <Box
                                elevation={2}
                                sx={{
                                    p: 2,
                                    flexGrow: 1,
                                    borderRadius: '5%',
                                    width: '100%',
                                }}
                            >
                                
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction={isMobileOrTablet ? 'column' : undefined}>
                                    {/* Options de livraisons  */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Conditions de livraison acceptées :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <CheckList title='CIF, CPT, EXW DEQ ...' options={livraisonOptions} disabled={!isEditing2} initialValues={["CIF", "EXW"]} />

                                    </Grid>
                                    {/* Options de devise de paiment */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Devise de paiement acceptée :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='USD, DZD, EUR,CAD ...' options={deviseOptions} disabled={!isEditing2} initialValues={["USD", "DZD"]}/>
                                    </Grid>
                                    {/* Options de paiment  */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Type de paiement accepté :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='D/P,  D/A, Cash, L/C ...' options={paimentOptions} disabled={!isEditing2} initialValues={["D/P", "L/C"]}/>
                                    </Grid>
                                    {/* Options de langue */}
                                    <Grid container item xs={6} justifyContent={isMobileOrTablet ? undefined : "flex-end"}>
                                        <Typography style={stylelabel}>Langue :</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CheckList title='Anglais, Français, Allemand ...' options={langueOptions} disabled={!isEditing2} initialValues={Data.langue}/>
                                    </Grid>
                                    
                                </Grid>
                                
                            </Box>
                           
                        </Grid>
                        {isEditing2  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Cancel2}>Annuler</Button>
          <Button style={{
            background:'rgba(0, 212, 8, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Save2}>Modifier</Button>
                          </div> )} 
    </>
  )
}

export default UpdateExportationConditions
