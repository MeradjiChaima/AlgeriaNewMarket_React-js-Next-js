/* eslint-disable no-unused-vars */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function TextFieldHiddenLabel() {
  const [text, setText] = React.useState(''); // State to store the text inside TextField

  const handleChange = (event) => {
    setText(event.target.value); // Update the text state when the input value changes
  };

  return (
    <Stack
      component="form"
      sx={{
        width: '25ch',
        
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      

      <TextField


      sx={{
        width: "213px",
        //height: "32px", 
        //height: '40px',
        border: "1px solid rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        
        
      }}
 
      //label={"txt"}

        id="filled-hidden-label-small"
        //value="txt2" // Set the value to the state variable
        onChange={handleChange} // Handle changes to the input value
        variant="standard"
        size="small"
      />
    </Stack>
  );
}
