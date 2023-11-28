import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearClick = () => {
    setSearchText('');
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        maxWidth: '300px', // Set a maximum width for the search bar
        margin: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <input
        type="text"
        style={{
          flex: '1',
          height: '13px',
          border: 'none',
          outline: 'none',
          padding: '10px',
          backgroundColor: 'white',
          color: '#0a7aff',
          borderRadius: '10px 0 0 10px',
        }}
        placeholder="Entrez le numéro de commande"
        value={searchText}
        onChange={handleInputChange}
      />
      {searchText && (
        <button
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#0a7aff',
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '0 10px 10px 0',
          }}
          onClick={handleClearClick}
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
