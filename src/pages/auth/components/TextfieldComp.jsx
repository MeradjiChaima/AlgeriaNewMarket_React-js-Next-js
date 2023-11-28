import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function TextFieldComponent(props) {
  const [text, setText] = React.useState(''); // State to store the text inside TextField
 
  const handleChange = (event) => {
    setText(event.target.value); // Update the text state when the input value changes
  };

  return (

      <TextField
      sx={{
        maxwidth: "230px",
        border: "1px solid rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
      }}
        onChange={handleChange} 
        variant="outlined"
        size='small'
        placeholder={props.sparkholder}
      />
    
  );
}
