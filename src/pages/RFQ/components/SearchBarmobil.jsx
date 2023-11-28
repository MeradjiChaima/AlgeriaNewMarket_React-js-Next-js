import React from 'react';

const SearchBarmobil = () => {
  const searchBarStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '250px',
    height: '20px',
    padding: '10px',
    border: '2px solid #2E55A9',
    borderRadius: '60px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add this line for shadow
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    width: '18px',
    height: '18px',
    fill: 'orange', // Couleur de l'icône
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={searchBarStyle }>
        <input
          type="text"
          placeholder="Entrez le numéro de commande"
          style={{ flex: 1, outline: 'none', border: 'none' }}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={iconStyle}>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C16.41 12.16 17 10.11 17 8c0-4.41-3.59-8-8-8S1 3.59 1 8s3.59 8 8 8c2.11 0 4.16-.59 5.73-1.63l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-7.5 0C6.01 14 4 11.99 4 9.5S6.01 5 8.5 5 13 7.01 13 9.5 10.99 14 8.5 14z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBarmobil;
