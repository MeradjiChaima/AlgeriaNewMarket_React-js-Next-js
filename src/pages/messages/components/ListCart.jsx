import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from './Card';
import CreditCardIcon from '@mui/icons-material/CreditCard';
export default function ListCart() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [openpopup,setopenpopup]=React.useState(false);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setopenpopup(true);
    console.log(index);
    
  };
  const closepopup = (item)=>{
    setopenpopup(item);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="carte1" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <CreditCardIcon/>
          </ListItemIcon>
          <ListItemText primary="carte2" />
        </ListItemButton>
      </List>
      <Divider />
      {openpopup && <Card openpopup={openpopup} ClosePopup={closepopup}/>}
    </Box>
  );
}