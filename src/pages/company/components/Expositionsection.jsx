import Dropdown from "../../../shared/components/Dropdown";
import {useEffect , useState} from "react";
import { Box} from "@mui/material";
import Stack from '@mui/material/Stack';
import ImageUploader from "../../../shared/components/ImageUploader";
import CssTextField from "./CssTextfield";
import StyledTextarea from "./StyledTextarea";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { Button , Typography } from '@mui/material';
import Edit from '../assets/Edit.png'


const testt = ["2021", "2022", "2023", "2024", "2025"];
function Expositionsection({ cardData,handleEdit, handleDelete, handleUpdate, handleCancel }){
    const limit=4;
    const importimages =(imag)=>{
      console.log(imag);
  }
    const [editedData, setEditedData] = useState({ ...cardData });
    const [isEditing, setIsEditing] = useState(editedData.isEditing); 
  
    const handleFieldChange = (field, value) => {
      setEditedData((prevData) => ({ ...prevData, [field]: value }));
    };
  
    const handleConfirm = () => {
      handleUpdate(editedData);
      setIsEditing(false); // Disable editing mode
    };
  
    const handleDiscard = () => {
      setEditedData({ ...cardData }); // Reset edited data to initial values
      setIsEditing(false); // Disable editing mode
      handleCancel(); 
    };
   
    useEffect(() => {
      // Update the isEditing state when the cardData proTypographychanges
      setIsEditing(editedData.isEditing);
    }, [editedData.isEditing]); 
     
    
    return(
      <div>
        {!isEditing && (
          <div className='flex flew-row justify-end items-start'>
          <Button onClick={() => setIsEditing(true)}>
            <img src={Edit} alt="Edit" />
          </Button>
          </div>
        )}
      
<Stack sx={{width:"100%",background:"white" ,padding:"4%",borderRadius:"10px", boxShadow:"0px 0px 6px rgba(0, 0, 0, 0.19)",marginBottom:"2%"}}>
{cardData.id > 1 && isEditing && (
                              <button onClick={() =>handleDelete(cardData.id)} style={{
                                color: 'red',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'end',
                              }}>
                                <DoDisturbOnIcon />
                              </button>
                            )}
          <Stack direction="row" sx={{width:"100%",alignItems:"center"}} spacing={4}>
           
          <Typography  sx={{color: "#051C4E",
          fontFamily: "Raleway",fontSize:"90%",fontWeight: 600,display:"flex",justifyContent:"end",width:"25%"}} gutterBottom >
          Nom du salon:  
          </Typography>
          <Box sx={{width:"70%"}}>

          
          <CssTextField label="Nom du salon" id="custom-css-outlined-input" size="small" 
          value={editedData.name}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          disabled={!isEditing}/>
          </Box>
          </Stack>  
          <Stack direction="row" sx={{width:"100%",alignItems:"center"}} spacing={4}>
          
          <Typography  sx={{color: "#051C4E",
          fontFamily: "Raleway",fontSize:"90%",fontWeight: 600,display:"flex",justifyContent:"end",width:"25%"}} gutterBottom >
          Pays/Région :  
          </Typography>
          <Dropdown list={testt} label='Pays' initialValue={editedData.country}
                                  
                                  disabled={!isEditing}   />
         

          </Stack>  

          <Stack direction="row" sx={{width:"100%",alignItems:"center"}} spacing={4}>
          
          <Typography  sx={{color: "#051C4E",
          fontFamily: "Raleway",fontSize:"90%",fontWeight: 600,display:"flex",justifyContent:"end",width:"25%"}} gutterBottom >
          Année :  
          </Typography>
          <Dropdown list={testt} label='Année' initialValue={editedData.annee}
                                  
                                  disabled={!isEditing}  />

          </Stack> 
          <Stack direction="row" sx={{width:"100%",alignItems:"center"}} spacing={4}>
          
          <Typography  sx={{color: "#051C4E",
          fontFamily: "Raleway",fontSize:"90%",fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"end",width:"25%"}} gutterBottom >
         Photos du salon :  
          </Typography>
          

          </Stack>  
          <Stack direction="row"  sx={{width:"100%",justifyContent:"center"}} spacing={4}>
            <Box sx={{ width:"70%"}}>
             <ImageUploader importimages={importimages} limit={limit} disabled={!isEditing} initialImages={editedData.images}/>
            </Box>
            
          </Stack> 
          <Stack direction="row" sx={{width:"100%"}} spacing={4}>
          
          <Typography  sx={{color: "#051C4E",
          fontFamily: "Raleway",fontSize:"90%",fontWeight: 600,display:"flex",justifyContent:"end",width:"25%"}} gutterBottom >
           Description :  
          </Typography>
          

          </Stack> 
          <Box sx={{width:"100%",justifyContent:"center",display:"flex"}}>
          <Stack direction="row" sx={{width:"100%",justifyContent:"center"}} spacing={4}>
          
          <StyledTextarea aria-label="empty textarea"   minRows={6} placeholder="Empty" value={editedData.description}
                                  onChange={(e) => handleFieldChange('description', e.target.value)}
                                  disabled={!isEditing} />
          </Stack>  
            </Box> 
          
          {isEditing  && (
          <div className='flex flex-row gap-5 justify-end items-center'>
            <Button style={{
              background:'rgba(255, 0, 0, 0.75)',
              fontFamily:'Raleway',
              fontSize:'100%', 
              color:'white',
              fontWeight:600, textTransform:'none' 
            }} className=' px-10 py-5' onClick={handleDiscard}>Annuler</Button>
            <Button style={{
              background:'rgba(0, 212, 8, 0.75)',
              fontFamily:'Raleway',
              fontSize:'100%', 
              color:'white',
              fontWeight:600, textTransform:'none' 
            }} className=' px-10 py-5' onClick={handleConfirm}>Modifier</Button>
          </div> )} 
               
          </Stack>
          </div>
    );
}
export default Expositionsection;