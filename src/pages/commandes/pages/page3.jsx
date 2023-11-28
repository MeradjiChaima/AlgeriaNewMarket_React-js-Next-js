import React, { useState } from 'react';
import Dropdown from '../components/CustomDropdown'; // Assurez-vous que le chemin d'accès est correct
import BlueCheckbox from '../components/BlueCheckBox'; // Assurez-vous que le chemin d'accès est correct

function Page3() {
  const [paysSelectedOption, setPaysSelectedOption] = useState('');
  const [compteSelectedOption, setCompteSelectedOption] = useState('');
  const [typeproduitSelectedOption, setTypeproduitSelectedOption] = useState('');
  const [montantcommandeSelectedOption, setMontantcommandeSelectedOption] = useState('');
   //pour le check box
   const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
   const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);
   const [isCheckboxChecked3, setIsCheckboxChecked3] = useState(false);
  
  const handleReset = () => {
    setPaysSelectedOption('');
    setCompteSelectedOption('');
    setTypeproduitSelectedOption('');
    setMontantcommandeSelectedOption('');
    
  };
  // Function to handle checkbox change
  const handleCheckboxChange1 = (isChecked) => {
    setIsCheckboxChecked1((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };
  const handleCheckboxChange2 = (isChecked) => {
    setIsCheckboxChecked2((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };
  const handleCheckboxChange3= (isChecked) => {
    setIsCheckboxChecked3((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };

  const paysOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Pays'
  ];

  const compteOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Compte'
  ];

  const typeproduitOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Type de produit'
  ];

  const montantcommandeOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Montant de commande'
  ];

  const styles = {
    container: {
      backgroundColor: '#FFFFF4',
      padding: '0.2rem',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
      width: '100%',
      maxWidth: '2400px',
      alignItems:'center',
      margin: '0 auto',
    },
    // ... Ajoutez d'autres styles si nécessaire
  };

  return (
    <div className="page1">
      <div style={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginTop: '2rem', marginLeft: '4rem', marginRight: '2rem' ,justifyContent:'space-around',}}>
          <div>
            <label
              style={{
                textAlign: 'right',
                marginRight: '1rem',
                marginLeft: '3rem',
                color: '#051C4E',
              }}
            >
              Pays :
            </label>
            <Dropdown
              label="Sélectionné"
              options={paysOptions}
              value={paysSelectedOption}
              onChange={(event) => setPaysSelectedOption(event.target.value)}
            />
          </div>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '7rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Type de produit :
            </label>
            <Dropdown
              label="Sélectionné"
              options={typeproduitOptions}
              value={typeproduitSelectedOption}
              onChange={(event) => setTypeproduitSelectedOption(event.target.value)}
            />
          </div>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '7rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Compte :
            </label>
            <Dropdown
              label="Sélectionné"
              options={compteOptions}
              value={compteSelectedOption}
              onChange={(event) => setCompteSelectedOption(event.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginTop: '1rem', marginLeft: '4rem' ,}}>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '6.5rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Montant de Commande :
            </label>
            <Dropdown
              label="Sélectionné"
              options={montantcommandeOptions}
              value={montantcommandeSelectedOption}
              onChange={(event) => setMontantcommandeSelectedOption(event.target.value)}
            />
          </div>
        </div>
        <div style={{ marginLeft: '7rem', marginRight: '10rem' , marginTop:'1rem',marginBottom: '2rem'}}>
        <label style={{ color: '#051C4E', marginRight: '1rem' }}>
            Order Tag :
            
          </label>
          <BlueCheckbox
          checked={isCheckboxChecked1}
          onChange={handleCheckboxChange1}></BlueCheckbox> 
          <label style={{ color: '#051C4E', marginRight: '1rem' }}>
            Commande répétée:
        
          </label>
          <BlueCheckbox checked={isCheckboxChecked2}
                onChange={handleCheckboxChange2}></BlueCheckbox> 
          <label style={{ color: '#051C4E', marginRight: '1rem' }}>
            Correspondant intelligent:
            
          </label>
          <BlueCheckbox checked={isCheckboxChecked3}
                onChange={handleCheckboxChange3}></BlueCheckbox> 
          <label style={{ color: '#051C4E' }}>
            Acheteur a un ou plusieurs transitaire:
            
          </label>
          </div>

        <div style={{ marginLeft: '7rem', marginRight: '20rem' }}>
          <button
            variant="contained"
            color="orange"
            style={{
              backgroundColor: '#F84B0E',
              color: 'white',
              border: '1px solid white',
              borderRadius: '12px',
              padding: '7px 35px',
              margin: '5px',
              cursor: 'pointer',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              fontSize: '16px',
            }}
            onClick={handleReset}
          >
            Réinitialiser
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default Page3;
