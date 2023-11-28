import React, { useEffect } from 'react'
import SendIcon from '@mui/icons-material/Send';
import {Box} from '@mui/material';
import {Avatar} from '@mui/material';
import {InputBase} from '@mui/material';
import { styled, alpha } from '@mui/material';
import {IconButton} from '@mui/material';
import {Stack} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ActionButtons from './components/ActionButtons';
import MessageBar from './components/MessageBar';
import messages from './components/listmessage.json';
import History from './components/History';
import { useMediaQuery ,useTheme} from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
export default function Messages() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
   const [messagetosend,setmessagetosend]=useState("");
   const [message, setMessage] = useState('');
   const [currentTime, setCurrentTime] = useState(new Date());
   const [size,setsize]=useState("100%");
   const [firstpage,setfirstpage]=useState (true);
   const [secondpage,setsecondpage]=useState (false);
   const [thirdpage,setthirdpage]=useState (false);
   const [index,setindex]=useState(0);
   const ImageModal = ({ imageUrl, onClose }) => {
    const modalOverlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay color
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensure modal is on top of other content
    };
  
    const imageModalStyle = {
      backgroundColor: 'grey',
      padding: '26px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      width:"50%",
      marginTop:"3%"
      
    };
  
    const closeStyle = {
      position: 'absolute',
      top: '2px',
      right: '10px',
      fontSize: '24px',
      cursor: 'pointer',
      color: 'white',
    };
    const imageStyle = {
      maxWidth: '100%',
      maxHeight: isMobile ? "90%" : "80vh", // Adjust this value to your preference
      display: 'block',
      margin: '0 auto',
    };
  
    return (
      <div style={modalOverlayStyle}>
        <div style={imageModalStyle}>
          <span style={closeStyle} onClick={onClose}>&times;</span>
          <img src={imageUrl} alt="Modal Image" style={imageStyle} />
        </div>
      </div>
    );
  };



  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = (imageUrl) => {
    setShowModal(true);
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImageUrl('');
  };

  const clickableImageStyle = {
    cursor: 'pointer',
  };

   function addimage (){
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    // Listen for file selection
    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        const imageTag = `<img src="${imageUrl}" alt="Inserted Image" />`;
        console.log(messagetosend + imageTag);

        const options = { hour: 'numeric', minute: 'numeric' };
       const time =currentTime.toLocaleTimeString([],options);
        const newmessage={ 
        username:"me",
        content:messagetosend,
        attachedimage:imageUrl,
        attachedvideo:null,
        date:time,
        image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",}
        setmessagesent((prevmessages) => [...prevmessages, newmessage]);
        if (messagetosend.trim() !== '') {
           
            setmessagetosend(''); // Clear the input field
         }
      }
    });

    // Trigger file input click
    fileInput.click();
  };

  function addvideo(){
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';

   
    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const mediaUrl = URL.createObjectURL(selectedFile);

        const options = { hour: 'numeric', minute: 'numeric' };
       const time =currentTime.toLocaleTimeString([],options);
        const newmessage={ 
        username:"me",
        content:messagetosend,
        attachedimage:null,
        attachedvideo:mediaUrl,
        date:time,
        image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",}
        setmessagesent((prevmessages) => [...prevmessages, newmessage]);
        if (messagetosend.trim() !== '') {
           
            setmessagetosend(''); // Clear the input field
         }
      }
    });

    // Trigger file input click
    fileInput.click();
  };

  

    const clickedconversation =(item)=>{
      for(var i=0;i<messages.length;i++){
        if (messages[i].id === item)
        {
          
          setindex(i);
          break;
        }
        
      }
     
        if (isMobile){
          setfirstpage(false);
          setsecondpage(true);
        }
    
    }
   const SenderMessage =({item})=>{
    return(
     
        <Box  id="send" sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"end",marginBottom:"1%"}}>
        <Box sx={{width:"100%",display:"flex",justifyContent:"end",alignItems:"Start",gap:"1%"}}>
      <Box sx={{background:"#E7E7E7",borderRadius:"8px",maxWidth:"40%",padding:"1.5%"}}>
      <h1 style={{fontFamily: "Poppins",
                  fontSize: "12px",
                  width:"99%",
                  textAlign:"end",
                  fontWeight: 700}}>{item.username}</h1>
 <p style={{fontFamily: "Poppins",
            fontSize: "9px",
          fontWeight: 500}}> {item.content}</p>
         {item.attachedimage && <img src={item.attachedimage}  style={clickableImageStyle}  onClick={() => openModal(item.attachedimage)}  alt="inserted"/>
         }
           {item.attachedvideo && (
          
              <video controls muted autoPlay style={{   width: '100%', height: '100%' }}>
                <source src={item.attachedvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
         
          )}
        
          <p style={{color: "rgba(0, 0, 0, 0.52)",
                     fontFamily: "Poppins",
                     fontSize: "9px",
                    
                     fontWeight: 500}}>{item.date}</p>
 </Box>
 <Avatar alt="Profile Picture" src={item.image} sx={{ width: 24, height: 24}} />
</Box>

</Box>
    );
 }

 const RecieverMessage=({item})=>{
    return(
 
        <Box id="receive" sx={{width:"100%",display:"flex",justifyContent:"start",alignItems:"end"}}>
          
        <Box sx={{width:"100%",display:"flex",justifyContent:"start",alignItems:"Start",gap:"1%"}}>
        <Avatar alt="Profile Picture" src={item.image} sx={{ width: 24, height: 24}} />
        <Box sx={{background:"#F84B0E",color:"white",borderRadius:"8px",maxWidth:"40%",padding:"1.5%"}}>
        <h1 style={{fontFamily: "Poppins",
                        fontSize: "12px",
                        fontWeight: 700}}>{item.username}</h1>
       <p style={{fontFamily: "Poppins",
                  fontSize: "9px",
                  
                fontWeight: 500}}>{item.content}  </p>
                 {item.attachedimage && <img src={item.attachedimage} alt="inserted"/>}
                <p style={{color: "rgba(255, 255, 255, 0.52)",
                           fontFamily: "Poppins",
                           fontSize: "9px",
                           width:"100%",
                           textAlign:"end",
                          
                           fontWeight: 500}}> {item.date} </p>
       </Box>
       
        </Box>
       
       </Box>
    );
 }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);return () => {
        clearInterval(interval); // Clean up the interval when the component unmounts
      };
    }, []);

    function sendmessage(){
        const options = { hour: 'numeric', minute: 'numeric' };
       const time =currentTime.toLocaleTimeString([],options);
        const newmessage={ 
        username:"me",
        content:messagetosend,
        date:time,
        image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",}
        setmessagesent((prevmessages) => [...prevmessages, newmessage]);
        if (messagetosend.trim() !== '') {
           
            setmessagetosend(''); // Clear the input field
         }
      
    }
   
    const[messagesent,setmessagesent] =useState([
        {
            username:"me",
            content:"content1content 1content1con tent1content1 content1content 1content hbfvkfgjvhfjnjkb1",
            date:"5:00pm",
            attachedvideo:null,
            attachedimage:null,
            image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
        }, {
            username:"me",
            content:"content2content2con tent1content1c ontent1content1content 1content1",
            date:"6:00pm",
            attachedvideo:null,
            attachedimage:null,
            image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
        }, {
            username:"me",
            content:"content3conte nt3cont ent1content1cont ent1conte nt1content1content1",
            date:"7:00pm",
            attachedvideo:null,
            attachedimage:null,
            image:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
        }, 
        {
            username:messages[index].primary,
            content:"fine thanks",
            date:"7:00pm",
            attachedvideo:null,
            attachedimage:null,
            image:messages[index].person,  
        }

    ]);
 
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: "15px",
        border: '1px solid', 
        borderColor:"rgba(60, 60, 67, 0.2)",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
       
        '&:hover': {
          backgroundColor: "rgba(60, 60, 67, 0.1)",
         
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        borderColor:"black",
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      const [typeclick,settypeclick]=useState("");
      const changesize =({size,type})=>{
       setsize(size);
       settypeclick(type);
       if(isMobile ){
        setsecondpage(false);
        setthirdpage(true);
       }
    }
     
      
  return (
    <Box sx={{width:"100%",display:"flex"}}>
       {showModal && (
        <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
      )}
      {isMobile && firstpage &&
      //la version mobile page 1
      <Box sx={{width:"100%",boxShadow: "3px 0px 13px 5px rgba(0, 0, 0, 0.03)"
    }}>
    <Stack direction="row"  spacing={1} sx={{marginBottom:"5%"}} >
      <Button variant="contained" size='small' sx={{backgroundColor:"#F84B0E",width:"35%",borderRadius:"15px"}}>Vendeur</Button>
     <Button variant="outlined" size='small' sx={{color:"#F84B0E",borderColor:"#F84B0E",width:"35%",borderRadius:"15px"}} >Achteur</Button>

    </Stack>
    <Box sx={{marginBottom:"8%"}} >
    <Search >
         <SearchIconWrapper>
           <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
         
           placeholder="Search…"
           inputProps={{ 'aria-label': 'search' }}
         />
       </Search>
    </Box>
    <ActionButtons clickedconversation={clickedconversation}/>

   </Box>
      }
      {!isMobile && 
      //la version desktop
      <Box sx={{width:"25%",boxShadow: "3px 0px 13px 5px rgba(0, 0, 0, 0.03)"
    }}>
    <Stack direction="row"  spacing={1} sx={{marginBottom:"5%"}} >
      <Button variant="contained" size='small' sx={{backgroundColor:"#F84B0E",width:"35%",borderRadius:"15px"}}>Vendeur</Button>
     <Button variant="outlined" size='small' sx={{color:"#F84B0E",borderColor:"#F84B0E",width:"35%",borderRadius:"15px"}} >Achteur</Button>

    </Stack>
    <Box sx={{marginBottom:"8%"}} >
    <Search >
         <SearchIconWrapper>
           <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
         
           placeholder="Search…"
           inputProps={{ 'aria-label': 'search' }}
         />
       </Search>
    </Box>
    <ActionButtons clickedconversation={clickedconversation}/>

   </Box> }
   {isMobile && secondpage &&
   //la version mobile page 2 
   <Box sx={{justifyContent:"center",width:"100%",display:"flex"}}>
   <Box sx={{ width:"100%"}}>
      <MessageBar changesize={changesize} username={messages[index].primary} photo={messages[index].person}/>
      <Box sx={{width:"100%",height:"450px"}}>
       <Box sx={{height:"90%",alignItems:"end",display:"flex", flexDirection: "column-reverse",overflowX:"hidden",overflowY:"scroll",padding:"1%"}}>
       <Box sx={{width:"100%"}}>
         

         
               {messagesent.map((item ,index)=>{
                   if (item.username === "me" )
                   return(
                  <SenderMessage key={index} item={item}/>
                 )
                 else{
                   return(
                       <RecieverMessage key={index} item={item}/>
                   )
                 }
               

                 
               })}
          
         
          </Box>
       </Box>
       <Box sx={{boxShadow:"0px 0px 1px rgba(0, 0, 0, 0.25)",height:"10%",justifyContent:"center",display:"flex",alignItems:"center"}}>
       <IconButton 
            size="large"
            edge="start"
           onClick={addimage}
            aria-label="menu"
            sx={{ mr: 0,width:"32px",height:"32px", '&:hover':{
                background:"#C5C5C5"
            } }}
          >
            <AddPhotoAlternateIcon size="small"sx={{width:"20px",height:"20px",color:"#F84B0E" ,}} />
          </IconButton>

          <IconButton 
            size="large"
            edge="start"
            onClick={addvideo}
            aria-label="menu"
            sx={{ mr: 0,width:"32px",height:"32px", '&:hover':{
                background:"#C5C5C5"
            } }}
          >
            <SlideshowIcon size="small"sx={{width:"20px",height:"20px",color:"#F84B0E" }} />
          </IconButton>
       

          <input placeholder='ecrire ici ...'
          value={messagetosend} 
          onChange={(e)=>{setmessagetosend(e.target.value)}} style={{height:"70%",width:'60%',borderRadius:"15px",border: "1px solid #FA6832",fontFamily: "Raleway",
      fontSize: "14px",
      paddingLeft:"2%",
      marginRight:"15px",
        fontWeight: 400}}/>
         <IconButton 
           size="large"
           edge="start"
           onClick={sendmessage}
           aria-label="menu"
           sx={{ mr: 0,background:"#F84B0E",width:"32px",height:"32px", '&:hover':{
               background:"#C5C5C5"
           } }}
         >
           <SendIcon size="small"sx={{width:"20px",height:"20px",color:"white" ,}} />
         </IconButton>

       </Box>
      </Box>
   </Box>

   
     </Box>

   } 
   {thirdpage && isMobile &&
   <Box sx={{width:"100%",border:"solid 1px rgba(0, 0, 0, 0.28)"}}>
     <Box sx={{width:"100%",border:"solid 1px rgba(0, 0, 0, 0.28)",height:"60px",display:"flex",alignItems:"center",padding:"2%"}}>
     <CloseIcon onClick={()=>{setthirdpage(false); setsecondpage(true)}} />
     <h1>History</h1>
       </Box>
        <History/>

       </Box>
   }

   {!isMobile && 
    <Box sx={{justifyContent:"center",width:"75%",display:"flex"}}>
    <Box sx={{ width:size}}>
       <MessageBar changesize={changesize} username={messages[index].primary} photo={messages[index].person}/>
       <Box sx={{width:"100%",height:"450px"}}>
        <Box sx={{height:"90%",alignItems:"end",display:"flex", flexDirection: "column-reverse",overflowX:"hidden",overflowY:"scroll",padding:"1%"}}>
        <Box sx={{width:"100%"}}>
          

          
                {messagesent.map((item ,index)=>{
                    if (item.username === "me" )
                    return(
                   <SenderMessage  item={item}/>
                  )
                  else{
                    return(
                        <RecieverMessage  item={item}/>
                    )
                  }
                

                  
                })}
           
          
           </Box>
        </Box>
        <Box sx={{boxShadow:"0px 0px 1px rgba(0, 0, 0, 0.25)",height:"10%",justifyContent:"center",display:"flex",alignItems:"center",gap:"2%"}}>
        <IconButton 
            size="large"
            edge="start"
           onClick={addimage}
            aria-label="menu"
            sx={{ mr: 0,width:"32px",height:"32px", '&:hover':{
                background:"#C5C5C5"
            } }}
          >
            <AddPhotoAlternateIcon size="small"sx={{width:"20px",height:"20px",color:"#F84B0E" ,}} />
          </IconButton>

          <IconButton 
            size="large"
            edge="start"
            onClick={addvideo}
            aria-label="menu"
            sx={{ mr: 0,width:"32px",height:"32px", '&:hover':{
                background:"#C5C5C5"
            } }}
          >
            <SlideshowIcon size="small"sx={{width:"20px",height:"20px",color:"#F84B0E" }} />
          </IconButton>
        
           <input placeholder='ecrire ici ...'
           value={messagetosend} 
           onChange={(e)=>{setmessagetosend(e.target.value)}} style={{height:"70%",width:'60%',borderRadius:"15px",border: "1px solid #FA6832",fontFamily: "Raleway",
       fontSize: "14px",
       paddingLeft:"2%",
      
         fontWeight: 400}}/>
          <IconButton 
            size="large"
            edge="start"
            onClick={sendmessage}
            aria-label="menu"
            sx={{ mr: 0,background:"#F84B0E",width:"32px",height:"32px", '&:hover':{
                background:"#C5C5C5"
            } }}
          >
            <SendIcon size="small"sx={{width:"20px",height:"20px",color:"white" ,}} />
          </IconButton>
        </Box>
       </Box>
    </Box>
    {size !== "100%" && typeclick === "history" &&
    <Box sx={{width:"25%",border:"solid 1px rgba(0, 0, 0, 0.28)"}}>
      <Box sx={{width:"100%",border:"solid 1px rgba(0, 0, 0, 0.28)",height:"60px",display:"flex",alignItems:"center",padding:"2%"}}>
      <CloseIcon/>
      <h1>History</h1>
        </Box>
         <History/>

        </Box>
    }
      </Box>
   }

     
    </Box>
  );
};


