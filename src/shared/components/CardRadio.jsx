/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardContent, Grid, Radio, Typography } from '@mui/material';
import { orange, blue } from '@mui/material/colors';

export default function RadioCard({
  width,
  text1,
  text2,
  name,
  value,
  checked,
  onChange,
}) {
  return (
    <Card sx={{ boxShadow: '0px 2px 8px 0px', borderRadius: '15px', width: '250px', height: '110px'  }}>
      <CardContent>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={10}>
            <Typography sx={{ fontSize: '11px', frontWeight: '500px', mb: 1.5 }}>{text1}</Typography>
            <Typography sx={{ fontSize: '11px', fontWeight: '500px' }} color='#051C4E'>
              {text2}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Radio
              name={name}
              value={value}
              checked={checked}
              onChange={(e) => onChange(e.target.value)}
              
              
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
