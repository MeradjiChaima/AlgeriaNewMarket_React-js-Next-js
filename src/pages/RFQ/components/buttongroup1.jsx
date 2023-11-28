import React, { useState } from 'react';

const ButtonGroup1 = ({ onPageChange }) => {
  const [activeButton, setActiveButton] = useState('Remboursements de commandes'); // Default to the first button

  const buttons = [
    'Remboursements de commandes',
    "Remboursement d'impôts",
    'Services après-vente',
  ];

  const handleClick = (button) => {
    setActiveButton(button);
    onPageChange(button); // Notify parent component about the button click
  };

  return (
    <div>
      <h1 style={{ marginLeft: '100px', color: '#051C4E' }}>Services après-vente et remboursements</h1>

      <div style={{ flexWrap: 'wrap', justifyContent: 'center', marginLeft: '100px' }}>
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            style={{
              backgroundColor: activeButton === button ? '#F84B0E' : 'white',
              color: activeButton === button ? 'white' : '#F84B0E',
              border: '1px solid white',
              borderRadius: '15px',
              padding: '7px 35px',
              margin: '5px',
              cursor: 'pointer',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              fontSize: '16px',
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup1;
