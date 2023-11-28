import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useMediaQuery, useTheme } from '@mui/material';

const PourcentageField = React.forwardRef((props, ref ) => {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const textFieldRef = useRef(null);
    const [inputValue, setInputValue] = useState(props.defaultValue || '');

    const getTextFieldValue = () => {
        return textFieldRef.current.value;
    };

    

    const handleInputChange = (event) => {
        let value = event.target.value;
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
            value = Math.min(numericValue, 100).toString();
        } else {
            value = '';
        }
        if (props.onChange) {
            props.onChange(value);
            setInputValue(value);
        }
        //
        //console.log('Valeur saisie :', value);
    };

    return (
        <TextField
            id="outlined-start-adornment"
            size='small'
            type="text"
            sx={{ m: 1, width: isMobile ? "110%" : isMobileOrTablet ? '80%' : '25%' }}
            InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
            }}
            value={inputValue}
            inputRef={(el) => {
                textFieldRef.current = el;
                if (ref) {
                    ref.current = {
                        getValue: getTextFieldValue,
                    };
                }
            }}
            onChange={handleInputChange}
            disabled={props.disabled}
            
        />
    );
});

export default PourcentageField;