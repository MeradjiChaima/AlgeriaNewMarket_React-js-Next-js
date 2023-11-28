import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import messages from './listmessage.json';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Listmes({clickedconversation}) {
  function setclickedconversation (id){
    console.log (id);
    clickedconversation(id);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ width:"100%" }}>
       
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button sx={{whiteSpace:"nowrap",overflow: "hidden",
              }} onClick={()=>{setclickedconversation(id)
               }}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary.length<16 ?secondary:secondary.slice(0,16)+"..."} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
     
    </React.Fragment>
  );
}