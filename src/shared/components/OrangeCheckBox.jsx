import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    borderRadius: '25%',
                    color: '#F84B0E',
                    '&.Mui-checked': {
                        color: '#F84B0E',
                    },
                },
            },
        },
    },
});

const OrangeCheckBox = ({
    // eslint-disable-next-line react/prop-types
    value,
    // eslint-disable-next-line react/prop-types
    checked,
    // eslint-disable-next-line react/prop-types
    onChange,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Checkbox
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
            />
        </ThemeProvider>
    );
}

export default OrangeCheckBox;