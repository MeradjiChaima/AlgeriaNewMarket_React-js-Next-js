import {useState} from 'react'
import { ActivityFields } from '../data';
import { useEditing } from '../Functions';
import "../pages/Page1.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Edit from '../assets/Edit.png';
import { Grid ,Checkbox , FormControlLabel} from "@mui/material"; 

function UpdateCompanyActivity() {
  const [Data , setData ] = useState(ActivityFields[0]) ;  
  const { isEditing : isEditing3 , handleEditClick : Edit3, handleCancelClick:Cancel3, handleSaveClick:Save3 } = useEditing(false);
  

  return (
    <>
     {!isEditing3 && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={Edit3}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
      )}

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
                    <FormControlLabel label='Agriculture' control={<Checkbox  checked={Data.agriculture}
                onChange={() => setData({ ...Data, agriculture: !Data.agriculture })}
                disabled={!isEditing3}/>} />
                   
                   <FormControlLabel label='Industry' control={<Checkbox checked={Data.industry}
                onChange={() => setData({ ...Data, industry: !Data.industry })}
                disabled={!isEditing3}/>} />

                  

                </div>
                <div id="checks" style={{ display: "flex", height: "30%", alignItems: "center", width: "50%" }}>
                <FormControlLabel label='Construction' control={<Checkbox  checked={Data.construction}
                onChange={() => setData({ ...Data, construction: !Data.construction })}
                disabled={!isEditing3}/>} />
                  

                  <FormControlLabel label='IT Solution' control={<Checkbox  checked={Data.it}
                onChange={() => setData({ ...Data, it: !Data.it })}
                disabled={!isEditing3}/>} />
                  
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
    
                    <FormControlLabel label='Fabricant' control={<Checkbox  checked={Data.fabricant}
                onChange={() => setData({ ...Data, fabricant: !Data.fabricant })}
                disabled={!isEditing3}/>} />

                  </Stack>
                </Grid>
                <Grid item xs={8} >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                  <FormControlLabel label='Bureau d’achat' control={<Checkbox  checked={Data.bureau}
                onChange={() => setData({ ...Data, bureau: !Data.bureau })}
                disabled={!isEditing3}/>} />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                  <FormControlLabel label='Fournisseur de services' control={<Checkbox  checked={Data.fournisseur}
                onChange={() => setData({ ...Data, fournisseur: !Data.fournisseur })}
                disabled={!isEditing3}/>} />
                  </Stack>
                </Grid>
                <Grid item xs={6} >
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <FormControlLabel label='Ministère/Bureau...' control={<Checkbox  checked={Data.ministere}
                onChange={() => setData({ ...Data, ministere: !Data.ministere })}
                disabled={!isEditing3}/>} />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                  <FormControlLabel label='Service commercial' control={<Checkbox  checked={Data.service}
                onChange={() => setData({ ...Data, service: !Data.service })}
                disabled={!isEditing3}/>} />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                  <FormControlLabel label='Autre' control={<Checkbox  checked={Data.autre}
                onChange={() => setData({ ...Data, autre: !Data.autre })}
                disabled={!isEditing3}/>} />


                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Stack>


          {isEditing3  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Cancel3}>Annuler</Button>
          <Button style={{
            background:'rgba(0, 212, 8, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Save3}>Modifier</Button>
        </div> )} 

    </>
  )
}

export default UpdateCompanyActivity
