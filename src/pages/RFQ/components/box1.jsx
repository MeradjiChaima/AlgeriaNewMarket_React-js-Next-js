import React, { useState } from 'react';

import ButtonGroup2 from './buttongroup2';
import SearchBar from './searchBar2'; // Import the SearchBar component

function Box1() {
 
  const [searchValue, setSearchValue] = useState('');

 
  const styles = {
    container: {
      backgroundColor: '#FFFFF4',
      padding: '0.2rem',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '3px',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
   
  };

  const handleSearchInputChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="box1">
      <div style={styles.container}>
        {/* Use the SearchBar component and pass the value and onChange handler */}
        
        <div style={{ display: 'flex', marginBottom: '1Rem', marginTop: '2rem' }}>
  <label
    style={{
      
      
      marginLeft:'4rem',
      color: '#051C4E',
      fontSize: '16px',
    }}
  >
    Statue:
  </label>
  
  <ButtonGroup2></ButtonGroup2>


          
        
        
            </div>
        
        <div style={{ display: 'flex', alignItems: 'center',marginBottom: '2rem', marginTop: '1rem' }}>
          
            <label
              style={{
                textAlign: 'right',
                marginRight: '1rem',
                marginLeft: '3rem',
                color: '#051C4E',
                fontSize: '16px',
              }}
            >
              Chercher :
            </label>
          
        
          <SearchBar value={searchValue} onChange={handleSearchInputChange} />
          <label style={{color: '#0A7AFF'}}>
              Cancel
            </label>
        
        
        
        </div>
      </div>
    </div>
    
  );
}

export default Box1;