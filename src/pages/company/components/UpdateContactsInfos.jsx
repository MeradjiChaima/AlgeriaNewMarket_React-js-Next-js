import {useState} from 'react'
import { ContactFields } from '../data';
import { useEditing } from '../Functions';
import "../pages/Page1.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Edit from '../assets/Edit.png';
import CssTextField from "./CssTextfield";
import ImageUploader from "../../../shared/components/ImageUploader";
import { Box } from "@mui/material";


function UpdateContactsInfos() {
  const [Data , setData ] = useState(ContactFields[0]) ;  
  const { isEditing : isEditing2 , handleEditClick : Edit2, handleCancelClick:Cancel2, handleSaveClick:Save2 } = useEditing(false , Data );
  const importimages = (imag) => {
    console.log(imag);
  }
 

  return (
    <>
    {!isEditing2 && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={Edit2}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
      )}
          <div id="stack2" direction="row" style={{ display: "flex", paddingTop: 35 }}>
            <Stack id="stackcontact" direction="column" sx={{ width: "60%"  }}>
              <Stack direction="row" sx={{ alignItems: "center", paddingTop: "2%" }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "39%"
                }} gutterBottom >
                  Contact légal :
                </Typography>

                <CssTextField label="Contact légal " id="custom-css-outlined-input" size="small" 
                value={Data.contact}
                onChange={(e) => setData({ ...Data, contact: e.target.value })}
                disabled={!isEditing2}/>
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center" ,paddingTop:'1%' }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Téléphone :
                </Typography>
                <CssTextField label="Téléphone" id="custom-css-outlined-input" size="small"
                value={Data.telephone}
                onChange={(e) => setData({ ...Data, telephone: e.target.value })}
                disabled={!isEditing2} />
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center", paddingTop:'1%' }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Mobile :
                </Typography>
                <CssTextField label="Mobile" id="custom-css-outlined-input" size="small" 
                value={Data.mobile}
                onChange={(e) => setData({ ...Data, mobile: e.target.value })}
                disabled={!isEditing2}/>
              </Stack>

              <Stack direction="row" sx={{ width: "100%", alignItems: "center" ,paddingTop:'1%' }} spacing={4}>
                <Typography id="textinput" sx={{
                  color: "#051C4E",
                  fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "39%"
                }} gutterBottom >
                  Email :
                </Typography>
                <CssTextField label="Email " id="custom-css-outlined-input" size="small" 
                value={Data.email}
                onChange={(e) => setData({ ...Data, email: e.target.value })}
                disabled={!isEditing2}/>
              </Stack>

            </Stack>

            <Box id="logodiv" sx={{ alignItems: "start", display: "flex", width: "30%", paddingTop: "1%" }}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", fontSize: "90%", paddingTop: "4%", width: "50%"
              }} gutterBottom >
                Logo de l'entreprise :
              </Typography>
              <Box>
              <ImageUploader importimages={importimages} limit={1} initialImages={Data.logo} disabled={!isEditing2} />
              </Box>

            </Box>

          </div>
           
          {isEditing2 && (
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

export default UpdateContactsInfos
