import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme } from '@mui/material';

const TotalField = ({ value }) => {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const StyledCheckIcon = styled(CheckIcon)({
        color: '#00D408',
    });

    const StyledClearIcon = styled(ClearIcon)({
        color: 'red',
    });

    const [iconComponent, setIconComponent] = useState(<StyledCheckIcon />);

    const handleInputChange = () => {
        const numericValue = Number(value);
        console.log(numericValue)
        if (numericValue > 100) {
            setIconComponent(<StyledClearIcon />);
        }
        else {
            if (!(iconComponent.type === StyledCheckIcon)) {
                setIconComponent(<StyledCheckIcon />);
            }
        }
    };

    useEffect(() => {
        handleInputChange();
    });

    return (
        <TextField
            id="outlined-read-only-input"
            size='small'
            sx={{ m: 1, width: isMobile ? "30%" : isMobileOrTablet ? '45%' : '25%' }}
            value={value}
            InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">{iconComponent}</InputAdornment>
            }}
        />
    )
}

export default TotalField;