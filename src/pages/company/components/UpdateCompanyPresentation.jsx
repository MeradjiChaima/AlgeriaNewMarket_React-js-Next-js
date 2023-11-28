import {useState} from 'react'
import { PresentationFields } from '../data';
import { useEditing , useEditingCard} from '../Functions';
import "../pages/Page1.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Edit from '../assets/Edit.png';
import { Box  } from "@mui/material";
import Expositionsection from "../components/Expositionsection";
import ImageUploader from "../../../shared/components/ImageUploader";
import StyledTextarea from "../components/StyledTextarea";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { ExpositionsCards } from '../data';

function UpdateCompanyPresentation() {


  const [Data , setData ] = useState(PresentationFields[0]) ;  
  const { isEditing : isEditing4 , handleEditClick : Edit4, handleCancelClick:Cancel4, handleSaveClick:Save4 } = useEditing(false);
  const importimages = (imag) => {
    console.log(imag);
  }


  const initialCards = [...ExpositionsCards]; // Provide your initial cards here
  const {
    cards,
    handleEdit,
    handleDelete,
    handleAddCard,
    handleUpdate,
    handleCancel,
  } = useEditingCard(initialCards);


  
  return (
    <>
     {!isEditing4 && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={Edit4}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
      )}
          <Stack id="stack" direction="column" spacing={0}>
            <div id="descriptionbox" style={{ display: "flex", gap: "1%", width: "100%", paddingTop: "8%", paddingBottom: "1%" , paddingLeft:'10%' }} spacing={2}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontSize: "85%", fontWeight: 600, display: "flex", 
              }} gutterBottom >
                Description de l’entreprise :
              </Typography>

              <StyledTextarea aria-label="empty textarea" minRows={6} placeholder={Data.description}
              value={Data.contact}
              onChange={(e) => setData({ ...Data, description: e.target.value })}
              disabled={!isEditing4} />
            </div>

           

              <div id="rows" style={{ display: "flex", width: "100%" , flexDirection:'column' , justifyContent:'flex-start', paddingLeft:'10%' }} >
              
                  <Typography sx={{
                    color: "#051C4E",
                    fontFamily: "Raleway", fontWeight: 600, display: "flex",  fontSize: "90%"  , textAlign:'start'
                  }} gutterBottom >
                    Photos  et videos de l’entreprise :
                  </Typography>
                  <Box>
                  <ImageUploader importimages={importimages} limit={5} initialImages={Data.images} disabled={!isEditing4} />
                  </Box>
                </div>
                
              
                {isEditing4  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Cancel4}>Annuler</Button>
          <Button style={{
            background:'rgba(0, 212, 8, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={Save4}>Modifier</Button>
        </div> )} 

            <div id="expositionbox" style={{ display: "flex", width: "100%", paddingTop: 15 }} spacing={2}>
              <Typography sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "24%"
              }} gutterBottom >
                Expostions :
              </Typography>
              <Stack id="expo" direction="column" sx={{ width: "70%" }} >
                {initialCards.map((card) =>  (

                  
                    <Expositionsection 
                    key={card.id}
  cardData={card}
  handleEdit={handleEdit}
  handleDelete={handleDelete}
  handleUpdate={handleUpdate}
  handleCancel={handleCancel}
                    />
                 
                ))}

              </Stack>


            </div>
            <Box sx={{ width: "100%", justifyContent: "center", paddingTop: "2%", display: "flex" }}>
            {cards.length < 10 && (
                    <Button onClick={()=> handleAddCard()} style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '2%',
                      fontSize: '13px',
                      color: 'rgba(0, 0, 0, 0.4)',
                      fontWeight: 'bold',
                      textTransform:'none'
                    }}>
                      <AddBoxOutlinedIcon />
                      Nombre maximale de processus : 15
                    </Button>
                  )}
            </Box>
           
          </Stack></>
  )
}

export default UpdateCompanyPresentation
