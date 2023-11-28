import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';

const theme = createTheme({
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    borderRadius: '25%',
                    color: '#366DFA',
                },
            },
        },
    },
});

const BlueCheckbox = ({ labell }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <ThemeProvider theme={theme}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheckboxChange} />} label={labell} />
        </ThemeProvider>
    );
}

export default BlueCheckbox;