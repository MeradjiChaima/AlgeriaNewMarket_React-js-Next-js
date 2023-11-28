import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FileCopyIcon from '@mui/icons-material/FileCopy';
export default function ListFichier() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
      const fileUrl = 'https://www.orimi.com/pdf-test.pdf'; // Replace with the actual file URL
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'file.pdf'; // Replace with the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
  
   
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="file1" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <FileCopyIcon/>
          </ListItemIcon>
          <ListItemText primary="file2" />
        </ListItemButton>
      </List>
      <Divider />
      
    </Box>
  );
}