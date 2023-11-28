import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function TextFieldComponent({ label, sparkholder }) {
  const [inputValue, setInputValue] = useState('');
  const textFieldStyle = {
    width: '280px',
    height: '26px',
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <TextField
        id="sparkholder"
        value={inputValue}
        onChange={handleChange}
        placeholder={sparkholder}
        variant="outlined"
        size="small"
        sx={textFieldStyle}
        InputProps={{
          classes: {
            notchedOutline: inputValue || sparkholder ? 'no-border' : 'standard-border',
          },
          endAdornment: inputValue ? null : (
            <InputAdornment position="end">{label}</InputAdornment>
          ),
        }}
        InputLabelProps={{
          shrink: true,
          style: { visibility: inputValue || sparkholder ? 'hidden' : 'visible' },
        }}
      />
    </div>
  );
}

export default TextFieldComponent;
