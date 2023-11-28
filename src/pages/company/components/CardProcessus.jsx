import CssTextField from "../components/CssTextfield"; 
import  { useState , useEffect } from 'react'
import ImageUploader from '../../../shared/components/ImageUploader'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { Button , Typography } from '@mui/material';
import Edit from '../assets/Edit.png'



const Card = ({ cardData,handleEdit, handleDelete, handleUpdate, handleCancel }) => {
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
      handleCancel(); // Disable editing mode
    };
   
    useEffect(() => {
      // Update the isEditing state when the cardData proTypographychanges
      setIsEditing(editedData.isEditing);
    }, [editedData.isEditing]); 
   

    const limit = 4;
    const importimages = (imag) => {
    console.log(imag);
     }
  
    return (
      <div>
       
        {!isEditing && (
          <div className='flex flew-row justify-end items-start'>
          <Button onClick={() => setIsEditing(true)}>
            <img src={Edit} alt="Edit" />
          </Button>
          </div>
        )}
        <div style={{
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
                            {cardData.id > 1 && (
                              <button onClick={() =>handleDelete(cardData.id)} style={{
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
                              <Typography style={{
                                color: 'rgba(5, 28, 78, 1)',
                                fontFamily: 'Raleway , sans',
                                fontSize: ' 14px',
                                fontWeight: 'bold'
                              }}>
                                Nom processus :</Typography>
                            </div>
                            <CssTextField label="Nom-Processus" id="custom-css-outlined-input" size="small" 
              value={editedData.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              disabled={!isEditing}/>
                          </div>
                          <div style={{
                            display: 'flex ',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            gap: '10px'
                          }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                              <Typography style={{
                                color: 'rgba(5, 28, 78, 1)',
                                fontFamily: 'Raleway , sans',
                                fontSize: ' 14px',
                                fontWeight: 'bold'
                              }}>
                                Photos du processus :</Typography>
                            </div>
                            <ImageUploader importimages={importimages}
                              limit={limit} disabled={!isEditing} initialImages={editedData.images}/>
                          </div>
                          <div style={{
                            display: 'flex ',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            gap: '10px'
                          }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                              <Typography style={{
                                color: 'rgba(5, 28, 78, 1)',
                                fontFamily: 'Raleway , sans',
                                fontSize: ' 14px',
                                fontWeight: 'bold'
                              }}>
                                Description du processus :</Typography>
                            </div>
                            <CssTextField label="Description - processus " id="custom-css-outlined-input" size="small" 
                                  value={editedData.description}
                                  onChange={(e) => handleFieldChange('description', e.target.value)}
                                  disabled={!isEditing}/>
                          </div>
  
  
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
                        </div>
                        
                      </div>
                  
        </div>
      
    );
  };
  

  export default Card ;