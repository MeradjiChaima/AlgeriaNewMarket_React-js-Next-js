import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import CustomButton from "../../../shared/components/CustomButton";




  export default function OtpPopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [otp , setOtp] = React.useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
    
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
        if (element.nextSibling) {
        element.nextSibling.focus();
        }
    };

    const handleFocus = (element) => {
        element.select();
    };

  return (
    <>
      <CustomButton variant="contained" onClick={handleClickOpen}>
        Confirmer
      </CustomButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Box noValidate component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }} >
            <img src="/password.png" alt="Avatar" style={{ width: '100px' }} />
            <DialogContentText id="alert-dialog-description">
              Un message OTP a été envoyé à votre adresse email
            </DialogContentText>
            <Box noValidate component="form" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {otp.map((data, index) => {
                return (
                  <input
                    className="otp-field"
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => handleFocus(e.target)}
                    style={{
                      width: '35px',
                      height: '30px',
                      margin: '10px',
                      borderRadius: '10px',
                      border: '2px solid rgba(248, 75, 14, 0.64)',
                      textAlign: 'center',
                    }}
                  />
                );
              })}
            </Box>
            <DialogContentText id="alert-dialog-description">
            L’OTP expire dans : 00:59
        </DialogContentText>
          </Box>
        </DialogContent>
        
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomButton onClick={handleClose}>verifer</CustomButton>
        </DialogActions>
      </Dialog>
    </>
  );
}