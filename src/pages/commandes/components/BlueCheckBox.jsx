import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const BlueCheckbox = ({
    value,
    checked,
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

export default BlueCheckbox;