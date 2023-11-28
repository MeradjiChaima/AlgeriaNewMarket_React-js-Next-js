import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Flag from 'react-flagkit';

function DropdownLanguage() {
  // State variables to manage the selected language and if the language has been changed
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLanguageChanged, setIsLanguageChanged] = useState(false);

  // useEffect hook to set the default language to 'English' when the component mounts
  useEffect(() => {
    if (!isLanguageChanged) {
      setSelectedLanguage('en'); // Set default language to 'English'
    }
  }, [isLanguageChanged]);

  // Event handler for language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setIsLanguageChanged(true); // Set the flag to true when the language is changed
  };

  // CSS styles for the form control and menu items
  const formControlStyle = {
    border: '0.2px solid #FA6832',
    borderRadius: '10px',
    minWidth: '100px',
    minHeight: '40px',
    backgroundColor: '#FFFFFF',


  };

  const menuItemStyle = {
    width: '120px',
  };

  // CSS styles for the flag icon and size
 

  const flagStyle = {
    marginRight: '8px',
    width: 18,
    height: 18,
  };

  // Array of language options with their corresponding values, labels, and flag codes
  const languages = [
    { value: 'en', label: 'English', flag: 'GB' },       // English language with United Kingdom flag
    { value: 'fr', label: 'Français', flag: 'FR' },      // French language with France flag
    { value: 'ar', label: 'العربية', flag: 'SA' },      // Arabic language with Saudi Arabia flag
    // Add more languages as needed
  ];

  return (
    <>
      {/* Form control to display the language dropdown */}
      <FormControl error variant="outlined" size="small" style={formControlStyle}>
        <InputLabel id="language-label"></InputLabel>
        {/* Select component to create the dropdown */}
        <Select
          labelId="language-label"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          sparkholder="Language"
          sx={{height:"40px", borderRadius: '10px',}}
        >
          {/* Mapping through the languages array to create menu items for each language */}
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value} style={menuItemStyle}>
              {/* Flag component to display the flag icon */}
              <Flag country={option.flag}  style={flagStyle} />
              {/* Display the language label */}
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </>
  );
}

export default DropdownLanguage;
