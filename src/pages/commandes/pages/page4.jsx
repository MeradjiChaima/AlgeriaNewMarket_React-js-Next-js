import React, { useState } from 'react';
import Dropdown from '../components/CustomDropdown'; // Assurez-vous que le chemin d'accès est correct


function Page4() {
  const [paysSelectedOption, setPaysSelectedOption] = useState('');
  const [compteSelectedOption, setCompteSelectedOption] = useState('');
  const [redigerparSelectedOption, setridegerparSelectedOption] = useState('');
  const [montantcommandeSelectedOption, setMontantcommandeSelectedOption] = useState('');
  const [creertempsSelectedOption, setcreertempsSelectedOption] = useState('');
  
  const handleReset = () => {
    setPaysSelectedOption('');
    setCompteSelectedOption('');
    setridegerparSelectedOption('');
    setMontantcommandeSelectedOption('');
    setcreertempsSelectedOption('');
    
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

  const redigerparOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... Autres options pour 'redige par'
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
                marginLeft: '7rem',
                marginRight: '1rem',
                color: '#051C4E',
              }}
            >
              Rédige par :
            </label>
            <Dropdown
              label="Sélectionné"
              options={redigerparOptions}
              value={redigerparSelectedOption}
              onChange={(event) => setridegerparSelectedOption(event.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', marginTop: '1rem', marginLeft: '4rem', }}>
          <div>
            <label
              style={{
                width: '200px',
                textAlign: 'right',
                marginLeft: '6.9rem',
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
                marginLeft: '33.5rem',
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

export default Page4;
