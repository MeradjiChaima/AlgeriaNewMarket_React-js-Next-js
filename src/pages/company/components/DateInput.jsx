import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function DateInput({ disabled, initialDate, ...props }) {
  const StyledDatePicker = styled(DatePicker)({
    '& .MuiInputBase-root': {
      backgroundColor: 'white',
      color: 'rgba(5, 28, 78, 0.6)',
      fontFamily: 'Raleway, sans-serif',
      fontSize: '16px',
      textDecoration: 'none',
      height: '35px',
      weidht: '160px',
      '& .MuiSvgIcon-root': {
        color: '#F84B0E',
      },
    },
  });

  return (
    <ThemeProvider theme={createTheme()}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          disabled={disabled}
          value={initialDate}
          {...props}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
