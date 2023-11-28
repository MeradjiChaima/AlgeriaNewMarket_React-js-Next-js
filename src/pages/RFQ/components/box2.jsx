import React, { useState, useEffect } from 'react';
import Dropdown from './CustomDropdown';
import SearchBarmobil from './SearchBarmobil';
import SearchBar from './searchBar2'; // Import the SearchBar component

function Box2() {
  const [numerocommandeSelectedOption, setnumerocommandeSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);

  const numerocommandeOptions = [
    // ... options
  ];

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

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div className="box1">
      <div style={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
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
          
          {/* Conditionally render the appropriate search bar based on screen size */}
          {isMobileView ? (
            <div style={{ flex: 1 }}>

              <SearchBarmobil value={searchValue} onChange={handleSearchInputChange} />
              <br></br>
              <Dropdown
                label="Numero De Commande"
                options={numerocommandeOptions}
                value={numerocommandeSelectedOption}
                onChange={(event) => setnumerocommandeSelectedOption(event.target.value)}
              />
            </div>
          ) : (
            <>
              <SearchBar value={searchValue} onChange={handleSearchInputChange} />
              <label style={{ color: '#0A7AFF' }}>Cancel</label>
              
              <div style={{ marginLeft: '45%' }}>
                <Dropdown
                  label="Numero De Commande"
                  options={numerocommandeOptions}
                  value={numerocommandeSelectedOption}
                  onChange={(event) => setnumerocommandeSelectedOption(event.target.value)}
                />
              </div>
            </>
          )}
          
          
          
        </div>
      </div>
    </div>
  );
}

export default Box2;
