import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button , Typography} from '@mui/material';

const Popup = ({ open, onClose , userName , userImg , text  }) => {
  return (
    <Dialog open={open} onClose={onClose} >
      
      <DialogContent>
        <div className='flex flex-col gap-5 justify-center items-center p-2 '>
        <Typography 
                  fontFamily="Poppins"
                  fontSize="1.5vw"
                  fontWeight={700}
                  color={'rgba(0, 0, 0, 1)'}>{userName} 
        </Typography>
        <img src={userImg} className=' w-16 h-16 rounded-full'/>
        <Typography 
                  fontFamily="Poppins"
                  fontSize="1.5vw"
                  fontWeight={500}
                  color={'rgba(0, 0, 0, 0.6)'}>{text}
        </Typography>


        <div className='flex flex-row space-x-24 '>
        <button onClick={onClose} className='rounded-3xl px-6 py-2' style={{background:'rgba(248, 75, 14, 1)'}}>
        <Typography 
                  fontFamily="Poppins"
                  fontSize="1vw"
                  fontWeight={500}
                  color={'white'}>
            Annuler
        </Typography>
        </button>
        <button onClick={onClose} className=' rounded-3xl px-6 py-2' style={{background:'rgba(248, 75, 14, 1)'}}>
        <Typography 
                  fontFamily="Poppins"
                  fontSize="1vw"
                  fontWeight={500}
                  color={'white'}>
            Confirmer
        </Typography>
        </button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
