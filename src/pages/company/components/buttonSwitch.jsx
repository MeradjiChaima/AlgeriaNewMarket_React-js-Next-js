import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const buttonswitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>

      <Switch
        size="small"
        color="default"
        sx={{
          '& .MuiSwitch-thumb': {
            backgroundColor: '#F84B0E',
          },
          '& .MuiSwitch-track': {
            backgroundColor: '#F84B0E',
          },
        }}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default buttonswitch;