import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import {styled} from '@mui/material/styles';
import {useState , useEffect} from 'react'
import PropTypes from 'prop-types';





const MyAutocomplete = styled(Autocomplete)({
  '& .MuiInputLabel-root': {
    color: '#051C4E', // Color of the label
  },
  '& .MuiOutlinedInput-root': {
    border: '1px solid rgba(0, 0, 0, 0.25)', // Default border color (with opacity)
    borderRadius: '10px', // Border radius 10px
    height : '38px', // Height of the input
    '&:hover fieldset': {
      border: '1px solid rgba(240, 146, 116, 1)', // Border color when hovered (full opacity)
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F09274', // Border color when focused (open state)
      color: '#051C4E', // Color of the label
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#051C4E', // Label color when focused (open state)
  },
  '& .MuiAutocomplete-popupIndicator': {
    color: '#F09274', // Color of the popup indicator (polygon of open)
    // fontSize: '35px', // Size of the popup indicator

  },
});


 function Dropdown (props) {

  const [value, setValue] = useState(props.initialValue || null);

  useEffect(() => {
    setValue(props.initialValue || null);
  }, [props.initialValue]);

  return (
    <MyAutocomplete
      disablePortal
      size='small'
      id="combo-box-demo"
      options={props.list}
      sx={{ width: '13.3rem',  }}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        if (props.onSelect) {
          props.onSelect(newValue);
        }
      }}
      disabled={props.disabled}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  initialValue: PropTypes.string,
  onSelect: PropTypes.func,
};
export default Dropdown ; 