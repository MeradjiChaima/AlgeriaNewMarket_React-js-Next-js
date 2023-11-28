import React, { useState } from 'react';

const ButtonGroup = ({currantActiveButton,onButtonChange}) => {
  const [activeButton, setActiveButton] = useState('toutes');

  const buttons = [
    'toutes',
    'Reachter',
    'À confirmer',
    'non payé',
    'À expédier',
    'a recevoir',
    'sous dispute',
    'complete',
  ];

  const handleClick = (button) => {
    setActiveButton(button);
    onButtonChange(button);
  };

  return (
    <div>
      <h1 style={{ fontSize:'3vw' , marginLeft : '50px', color: '#051C4E',fontFamily:'Raleway' , fontWeight:800 , marginBottom:'15px'}}>Toutes les commandes</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            style={{
              backgroundColor: activeButton === button ? '#F84B0E' : 'white',
              color: activeButton === button ? 'white' : '#F84B0E',
              border: '1px solid white',
              borderRadius: '15px', // Rounded corners
              padding: '7px 35px', // Default padding for normal screens
              margin: '5px',
              cursor: 'pointer',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
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

export default ButtonGroup;