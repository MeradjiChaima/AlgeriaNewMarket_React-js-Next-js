/* eslint-disable react/prop-types */
//import * as React from "react";
import {  Radio,} from "@mui/material";
import { orange} from '@mui/material/colors';

export default function RadioButtons({
  value,
  checked,
  onChange,
}) {
  return (
   
    <Radio
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
      //customize the radio button
      sx={{
        '& .MuiSvgIcon-root': {
          width: '17px', 
          height: '17px',
          flexShrink: '0px',
          strokeWidth: '0.5px',
         
          color: orange[600],
          //borderColor: '#051C4E',
          borderRadius: '50%', // Make the radio button circular
          backgroundColor: checked ? orange[600] : 'transparent', // Fill the radio button 
         
          
        },
      }}
    />
   
      );
    }
    