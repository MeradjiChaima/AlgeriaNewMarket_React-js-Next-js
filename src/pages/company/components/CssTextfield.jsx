
import * as React from "react";
import { TextField } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label':{
     
      color:"rgba(5, 28, 78, 0.7)",
      fontFamily:"Raleway ",
      fontWeight: 500,
      fontSize:"85%",  
    },
    '& fieldset':{
     
       height:"100%",
       paddingBottom:"3%",
      
    },
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.25)',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });
  export default CssTextField;
  