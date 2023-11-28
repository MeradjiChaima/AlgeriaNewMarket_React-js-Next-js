/* eslint-disable no-unused-vars */
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';

const typo_checkbox = {
  color: '#051C4E',
      fontFamily: 'Raleway',
      fontSize: '11px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
}

export default function RadioActivity() {
  return (
    <FormControl>
      
      <RadioGroup

                  sx={{
                    '& .MuiSvgIcon-root': {
                      width: '17px', 
                      height: '17px',
                      flexShrink: '0px',
                      strokeWidth: '0.5px',
                      color: "#F84B0E",
                      //borderColor: '#051C4E',
                      borderRadius: '50%', // Make the radio button circular
                      //backgroundColor:
                      
                    },
                  }}
        row
        defaultValue="Vendeur"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Acheteur" control={<Radio />} label="Acheteur" />
        <FormControlLabel  value="Vendeur" control={<Radio />} label="Vendeur" />
      </RadioGroup>
    </FormControl>
  );
}
