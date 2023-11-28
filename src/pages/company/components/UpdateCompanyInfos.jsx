import {useState} from 'react'
import { CompanyFields } from '../data';
import { useEditing } from '../Functions';
import "../pages/Page1.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Edit from '../assets/Edit.png';
import CssTextField from "./CssTextfield";

function UpdateCompanyInfos() {

  const [Data , setData ] = useState(CompanyFields[0]) ;  
  const { isEditing, handleEditClick, handleCancelClick, handleSaveClick } = useEditing(false , Data );
  return (
    <>
       {!isEditing && (
            <div className='flex flew-row justify-end items-start'>
        <Button onClick={handleEditClick}>
          <img src={Edit} alt="Edit" />
        </Button>
        </div>
      )}
          <Stack direction="row" sx={{ width: "100%", alignItems: "center"}} spacing={4}>
          

            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontSize: "90%", fontWeight: 600, display: "flex", justifyContent: "end", width: "25%"
            }} gutterBottom >
              Nom de l'entreprise :
            </Typography>

            <CssTextField  label="Nom de l'entreprise" id="custom-css-outlined-input" size="small"
        
        value={Data.name}
        onChange={(e) => setData({ ...Data, name: e.target.value })}
        disabled={!isEditing}
        
      />


          </Stack>
          <Stack direction="row" sx={{ width: "100%", alignItems: "center" , paddingTop:'1%'}} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Adresse :
            </Typography>

            <br />
          </Stack>
          <Stack direction="row" sx={{ width: "100%", alignItems: "center" , paddingTop:'1%'}} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Rue :
            </Typography>
            <CssTextField label="Rue" id="custom-css-outlined-input" size="small" 
            value={Data.rue}
            onChange={(e) => setData({ ...Data, rue: e.target.value })}
            disabled={!isEditing} />
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center", paddingTop:'1%'}} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Ville :
            </Typography>
            <CssTextField label="Ville " id="custom-css-outlined-input" size="small" value={Data.ville}
        onChange={(e) => setData({ ...Data, ville: e.target.value })}
        disabled={!isEditing}/>
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center" ,paddingTop:'1%' }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Code postal :
            </Typography>
            <CssTextField label="Codepostal" id="custom-css-outlined-input" size="small" 
            value={Data.code}
            onChange={(e) => setData({ ...Data, code: e.target.value })}
            disabled={!isEditing}/>
          </Stack>


          <Stack direction="row" sx={{ width: "100%", alignItems: "center",paddingTop:'1%' }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 530, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Pays/Région :
            </Typography>
            <CssTextField label="Pays/Région " id="custom-css-outlined-input" size="small" value={Data.country}
        onChange={(e) => setData({ ...Data, country: e.target.value })}
        disabled={!isEditing}/>
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center",paddingTop:'1%' }} spacing={4}>
            <Typography id="textinput" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "90%", width: "23%"
            }} gutterBottom >
              Site de l’entreprise :
            </Typography>
            <CssTextField label=" Site de l’entreprise  " id="custom-css-outlined-input" size="small" value={Data.site}
        onChange={(e) => setData({ ...Data, site: e.target.value })}
        disabled={!isEditing}/>
          </Stack>

          <Stack direction="row" sx={{ width: "100%", alignItems: "center",paddingTop:'1%' }} spacing={4}>
            <Typography id="textline" sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "80%", width: "25.5%"
            }} gutterBottom >
              Téléphone :
            </Typography>
            <CssTextField label="Téléphone  " id="custom-css-outlined-input" size="small"  value={Data.telephone}
        onChange={(e) => setData({ ...Data,telephone: e.target.value })}
        disabled={!isEditing}/>
            <Typography sx={{
              color: "#051C4E",
              fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", fontSize: "85%", width: "23%"
            }} gutterBottom >
              Fax :
            </Typography>
            <CssTextField label="Fax " id="custom-css-outlined-input" size="small" value={Data.fax}
        onChange={(e) => setData({ ...Data, fax: e.target.value })}
        disabled={!isEditing}/>
          </Stack>

          <div id="rows" style={{ width: "100%", display: "flex", justifyContent: "space-between", paddingTop:'1%'}} >
            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "90%"
              }} gutterBottom >
                Année de création  :
              </Typography>
              <CssTextField label="Année" id="custom-css-outlined-input" size="small" value={Data.annee}
        onChange={(e) => setData({ ...Data, annee: e.target.value })}
        disabled={!isEditing}/>
            </div>

            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "90%"
              }} gutterBottom >
                Type d'entreprise  :
              </Typography>
              <CssTextField label="Type d'entreprise  " id="custom-css-outlined-input" size="small" value={Data.type}
        onChange={(e) => setData({ ...Data,type : e.target.value })}
        disabled={!isEditing}/>
            </div>

            <div className="colone" style={{ width: "33%", display: "flex", alignItems: "center" }}>
              <Typography id="textinput" sx={{
                color: "#051C4E",
                fontFamily: "Raleway", fontWeight: 600, display: "flex", justifyContent: "end", width: "50%", fontSize: "85%"
              }} gutterBottom >
                Nombre d’employés :
              </Typography>
              <CssTextField label="Nombre d’employés " id="custom-css-outlined-input" size="small" value={Data.nb_emploi}
        onChange={(e) => setData({ ...Data, nb_emploi: e.target.value })}
        disabled={!isEditing}/>
            </div>


          </div>



          {isEditing  && (
        <div className='flex flex-row gap-5 justify-end items-center'>
          <Button style={{
            background:'rgba(255, 0, 0, 0.75)',
            fontFamily:'Raleway',
            fontSize:'100%', 
            color:'white',
            fontWeight:600, textTransform:'none' 
          }} className=' px-10 py-5' onClick={()=> {handleCancelClick() ; setData(CompanyFields[0]);} }>Annuler</Button>
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

export default UpdateCompanyInfos; 
