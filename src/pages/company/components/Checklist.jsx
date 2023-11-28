import React, { useState, useEffect } from 'react';
import {
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
} from '@mui/material';

const CheckList = ({ title, options, disabled, initialValues }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleClick = (event) => {
        if (disabled) return; // Don't open the menu if disabled
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (value) => () => {
        if (disabled) return; // Don't allow selection if disabled

        if (selectedItems.includes(value)) {
            setSelectedItems((prevSelected) =>
                prevSelected.filter((item) => item !== value)
            );
        } else {
            setSelectedItems((prevSelected) => [...prevSelected, value]);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        // Set the initial selected items based on initialValues prop
        setSelectedItems(initialValues || []);
    }, [initialValues]);

    const buttonstyle = {
        width: 300,
        color: 'gray',
        borderColor: 'gray'
    }

    return (
        <div>
            <Button onClick={handleClick} variant="outlined" style={buttonstyle} disabled={disabled}>
                {title}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {options.map((option) => (
                    <MenuItem key={option.value} onClick={handleMenuItemClick(option.value)}>
                        <ListItemIcon>
                            <Checkbox checked={selectedItems.includes(option.value)} />
                        </ListItemIcon>
                        <ListItemText primary={option.label} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default CheckList;
