import React from 'react';
import { FormControl,  MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';

const CustomFormControl = styled(FormControl)({
  border: '1px solid #2E55A9',
  borderRadius: 10,
  padding: 0,
  width: '230px',
});

const ResponsiveCustomFormControl = styled(CustomFormControl)({
  '@media (max-width: 768px)': {
    width: '100%', // Adjust as needed for smaller screens
  },
});

function Dropdown(props) {
  const { label, options, value, onChange } = props;

  return (
    <ResponsiveCustomFormControl size="small">
      
      <Select
        id={`${label}-dropdown`}
        value={value}
        onChange={onChange}
        displayEmpty
      >
        <MenuItem value="">
          {label}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </ResponsiveCustomFormControl>
  );
}

export default Dropdown;
