import React, { useState } from 'react';

const ButtonGroup2 = ({ onPageChange }) => {
  const [activeButton, setActiveButton] = useState('toutes');

  const buttons = [
    'Tout (0)',
    'Fournisseur à répondre(0)',
    "L'acheteur doit répondre(0)",
    'Le fournisseur doit fournir des preuves (0)',
    'Affaire transmise à l’admin du site (0)',
    'Affaire en cours de résolution (0)',
    'Affaire classée (0)',
    "Affaire annulée (0)",
    
    
  ];

 
  

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      
      
      <div style={{ flexWrap: 'wrap', justifyContent: 'center' ,marginLeft : '10px'}}>
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            style={{
              backgroundColor: activeButton === button ? '#F84B0E' : 'white',
              color: activeButton === button ? 'white' : '#051C4E',
              border: '1px solid white',
              borderRadius: '3px', // Rounded corners
              padding: '7px 35px', // Default padding for normal screens
              margin: '5px',
              cursor: 'pointer',
              
              fontSize: '16px', // Default font size for normal screens
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup2;
