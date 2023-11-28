
import { useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { Typography ,Button } from '@mui/material';
import Dropdown from '../../../shared/components/Dropdown';
import PourcentageField from './PourcentageField';
import Edit from '../assets/Edit.png'; 
import {useEditing} from '../Functions'; 
import { ExportationInfos } from '../data';
function UpdateExportationInfos() {
  const stylelabel = {
    color: '#051C4E',
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Raleway',
    paddingTop: 10,
    paddingLeft: 10
}

//labels des pays
const stylelabelinx = {
    color: '#051C4E',
    fontWeight: 'bold',
    fontSize: '13px',
    textalign: 'center',
    fontFamily: 'Raleway',
    paddingTop: 10
}
const annee = [
  "2001", "2002", "2020", "2025"];
const [selectedAnnee, setSelectedAnnee] = useState("2020");
const handleSelect = (annee) => {
  // Perform actions or update the state based on the selectedValue
  console.log('Selected annee:', annee);

  // For example, you can update some state variable with the selected value
  setSelectedAnnee(annee);
};
const pourcentageFieldRef = useRef(null);
    const [inputValue, setInputValue] = useState(''); //pour recuperer la valeur des pourcentages entree par l'utilisateur
    const [totalvalue, setTotalValue] = useState('0'); //pour la partie calcul de la somme des pourcentages

    const handlePourcentageChange = (value) => {
        setInputValue(value); // Met à jour l'état local avec la valeur saisie
        console.log('valeur saisie:', inputValue)
        handleTotalChange(value);
    };
     //pour la partie calcul de la somme des pourcentages, peut etre changee plus tard
     const handleTotalChange = ({ value }) => {
      const numericTotal = Number(totalvalue) + Number(value); //some de la valeur deja existante dans le TotalField qui affiche la somme, avec value
      setTotalValue(numericTotal.toString())
  }

//labels des pays pour les pourcentages
const labelsArray = ['Amérique du Nord ', 'Amérique du Sud', 'Europe de l Est ', 'Asie du Sud-Est ', 'Afrique ', 'Océanie', 'Moyen-Orient ', 'Asie de l Est ', 'Europe de l Ouest ', 'Amérique centrale ', 'Europe du Nord ', 'Europe du Nord ', 'Asie du Sud ', 'Marché intérieur '];
  const [Data , setData ] = useState(ExportationInfos) ;  
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
                       
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction='column'>      
                            <Grid>
                                <Typography style={stylelabel}>Principaux marchés et distribution :</Typography>
                            
                            </Grid>
                            
                            <Grid container direction='row' rowSpacing={1} columnSpacing={1}>
                            
                                    {Data.map((initialValue, index) => (
        <div key={index} className='flex flex-wrap justify-center items-center'>
          <PourcentageField
            ref={(el) => (pourcentageFieldRef.current[index] = el)}
            disabled={!isEditing1}
            defaultValue={initialValue} onChange={handlePourcentageChange}
          />
          <Typography style={stylelabelinx}>{labelsArray[index]}</Typography>
        </div>
      ))}                    
                            </Grid>    
                            
                            <Grid container >
                                <Typography style={stylelabel}>Année début d’exportation :</Typography>
                                <Dropdown list={annee} label='Année' disabled={!isEditing1} initialValue={selectedAnnee} onSelect={handleSelect} />
                            </Grid>
                            
                        </Grid>
                        

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

export default UpdateExportationInfos
