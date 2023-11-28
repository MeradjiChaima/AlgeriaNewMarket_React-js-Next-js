import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import CustomButton from './CustomButton';
import TextField from '@mui/material/TextField';
import MenuItem     from '@mui/material/MenuItem';


const CustomSearchBar = styled(Paper)({
    
    '& .MuiInputBase-root': {
        color: 'rgba(139, 150, 165, 1)', // Text color
    },
    
    height: '50px',

})


const SearchTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '100px 0px 0px 100px', // Set the border radius to 100px
      },
  });

const Secteurs  = [
    { 
      label: 'Industrie',
    },
    {
      label: 'Agriculture',
    },
    {
      label: 'Construction',
    },
    {
      label: 'IT Solution',
    },
  ];


export default function SearchBar() {
  return (
    <CustomSearchBar
      component="form"
      sx={{display: 'flex' ,alignItems: 'center', width: '80%',margin: 'auto', borderRadius: '100px',   }}
    >
      
      <SearchTextField
      id="outlined-select-currency"
      select
    label="Secteurs d’activité"
      sx={{
        width: '6rem',
        '@media (min-width: 768px)': {
            width: '13rem', // Adjust the width for smaller screens
          },
      }}
    >
          {Secteurs .map((option) => (
            <MenuItem key={option.label} value={option.label} >
              {option.label}
            </MenuItem>
          ))}
        </SearchTextField>
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Marques, Produits, Services"
        inputProps={{ 'aria-label': 'Marques, Produits, Services' }}
      />
        <CustomButton type="button" 
        sx={{ right: '0', p:'15px', width:'5.7rem',
            '@media (min-width: 768px)': {
            width: 'auto', // Adjust the width for smaller screens
            },
            borderRadius: '100px' }} aria-label="search">
        <SearchIcon/> Search
        </CustomButton>
    </CustomSearchBar>
    
  );
}