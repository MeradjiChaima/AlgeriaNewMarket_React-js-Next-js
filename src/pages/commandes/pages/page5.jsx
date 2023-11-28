import React, { useState } from 'react';
import Dropdown from '../components/CustomDropdown'; // Assurez-vous que le chemin d'accès est correct
import BlueCheckbox from '../components/BlueCheckBox'; // Assurez-vous que le chemin d'accès est correct


function Page5() {
  const [paysSelectedOption, setPaysSelectedOption] = useState('');
  const [compteSelectedOption, setCompteSelectedOption] = useState('');
  const [methodeexpeditionSelectedOption, setmethodeexpeditionSelectedOption] = useState('');
  const [montantcommandeSelectedOption, setMontantcommandeSelectedOption] = useState('');
  const [creertempsSelectedOption, setcreertempsSelectedOption] = useState('');
  const [typeExportationSelectedOption, setTypeExportationSelectedOption] = useState('');
   //pour le check box
   const [isCheckboxChecked1, setIsCheckboxChecked1] = useState(false);
   const [isCheckboxChecked2, setIsCheckboxChecked2] = useState(false);  


 
  const handleReset = () => {
    setPaysSelectedOption('');
    setCompteSelectedOption('');
    setmethodeexpeditionSelectedOption('');
    setMontantcommandeSelectedOption('');
    setcreertempsSelectedOption('');
    setTypeExportationSelectedOption('');
    
  };
   // Function to handle checkbox change
   const handleCheckboxChange1 = (isChecked) => {
    setIsCheckboxChecked1((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };
  const handleCheckboxChange2 = (isChecked) => {
    setIsCheckboxChecked2((prevChecked) => !prevChecked); // Inverse la valeur actuelle de l'état
  };

 

  const paysOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Pays'
  ];

  const creertempsOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Creer temps'
  ];

  const methodeexpeditionOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Méthode d’expédition :'
  ];

  const montantcommandeOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Montant de commande'
  ];

  const compteOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Compte'
  ];

  const typeexportationOption = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'Compte'
  ];

  const styles = {
    container: {
      backgroundColor: '#FFFFF4',
      padding: '0.2rem',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
      width: '100%',
      maxWidth: '2400px',
      margin: '0 auto',
    },
    // ... Ajoutez d'autres styles si nécessaire
  };

  return (
    <div className="page1">
      <div style={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginTop: '2rem', marginLeft: '4rem', marginRight: '2rem',justifyContent:'space-around', }}>
          <div>
            <label
              style={{
                textAlign: 'right',
                marginRight: '1rem',
                marginLeft: '10.2rem',
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
                marginLeft: '8.9rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Créer Temps :
            </label>
            <Dropdown
              label="Sélectionné"
              options={creertempsOptions}
              value={creertempsSelectedOption}
              onChange={(event) => setcreertempsSelectedOption(event.target.value)}
            />
          </div>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '7.1rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Méthode d’expédition :
            </label>
            <Dropdown
              label="Sélectionné"
              options={methodeexpeditionOptions}
              value={methodeexpeditionSelectedOption}
              onChange={(event) => setmethodeexpeditionSelectedOption(event.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginTop: '1rem', marginLeft: '4rem',justifyContent:'space-around', }}>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
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
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '7.9rem',
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
          <div>
      <label
                
                style={{
                  width: "200px",
                  textAlign: "right",
                  marginLeft : '5.4rem',
                  marginRight: "1rem",
                  color: "#051C4E",
                }}
              >
                Type d'exportation :
              </label>
      <Dropdown
        label="selectioné"
        options={typeexportationOption}
        value={typeExportationSelectedOption}
        onChange={event => setTypeExportationSelectedOption(event.target.value)}
      />
      </div>
        </div>
        <div style={{ marginLeft: '7rem', marginRight: '10rem' , marginTop:'1rem',marginBottom: '2rem',justifyContent:'space-around',}}>
        <label style={{ color: '#051C4E', marginRight: '1rem' }}>
            Order Tag :
            
          </label>
          <BlueCheckbox
          checked={isCheckboxChecked1}
          onChange={handleCheckboxChange1}></BlueCheckbox> 
          <label style={{ color: '#051C4E', marginRight: '1rem' }}>
          All logistique :
          </label>
          <BlueCheckbox checked={isCheckboxChecked2}
                onChange={handleCheckboxChange2}></BlueCheckbox> 
          <label style={{ color: '#051C4E', marginRight: '1rem' }}>
            en Retard non expédié :
            
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

export default Page5;
