import zIndex from '@mui/material/styles/zIndex';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';
import { useMediaQuery ,useTheme} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import drapeau from "/drapeau.png";
const Card = ({openpopup,ClosePopup}) => {
  const [flip,setfliped]=useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const togglePopup = () => {
    ClosePopup(!openpopup);
    if(flip){
        setfliped(false);
    }
  };

  return (
    
    <div className="popup-container" style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        }}>
        
      
      {openpopup  &&  !flip &&(
        <div className="popup" style={{position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            zIndex:1,
            justifyContent: "center",
            alignItems: "center"}}>
          <div className="popup-content" style={{ backgroundColor: "white",
        padding: "5px",
        borderRadius: "5px",
         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
         width: isMobile ? "90%" : "35%", height:"37%"}}>
            <div style={{display:"flex",justifyContent:"end"}}>
            <button className="close-button" style={{
             padding: "5px 10px",
             
             color: "grey",
             border: "none",
             right:0,
              cursor: "pointer"}} onClick={togglePopup}>
              <CloseIcon/>
            </button>
           </div>
           <div style={{display:"flex",alignItems:"center",paddingLeft:"5%",gap:"3%"}}>
           <Avatar  sx={{width:"70px",height:"70px"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
           <div style={{lineHeight:"14px"}}>
           <h2 style={{fontFamily: "Poppins",
            fontSize:"15px",
            fontWeight: 700,
             letterSpacing: "0.29px"}}>Username</h2>
            <p style={{color: "rgba(0, 0, 0, 0.60)",
               
fontSize: "12px",
fontWeight: 600,
letterSpacing: "0.18px",}}>user id number</p>
            <p style={{color: "rgba(0, 0, 0, 0.60)",
               
               fontSize: "12px",
               fontWeight: 600,
               letterSpacing: "0.18px",}}>useremail@gmail.com</p>
            </div>
            </div>
            <div style={{paddingLeft:"5%",lineHeight:"16px"}}>
            <h2 style={{color: "#000",
            fontFamily: "Poppins",
            fontSize: "13px",
           
            fontWeight: 600,
            letterSpacing: "0.18px"}}>Description</h2>
            <p style={{color: "rgba(0, 0, 0, 0.60)",
fontFamily: "Poppins",
fontSize: "12px",
fontWeight: 600,
letterSpacing: "0.18px"}}>ngbfgùlbkùgmlkbmfgkbpfkgpbobknnbkjkbjn.</p>
            <p style={{color: "#F84B0E",
fontFamily: "Poppins",
fontSize: "11px",
fontWeight: 600,
letterSpacing: "0.14px"}}>www.websitecompany.com</p>
<div style={{display:"flex",gap:"1%"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="70" height="15" viewBox="0 0 92 21" fill="none">
<path d="M6.4544 6.33976L8.99949 0.556788C9.32616 -0.185596 10.2701 -0.185596 10.5968 0.556788L13.1418 6.33976L18.8335 7.27283C19.5637 7.39254 19.8547 8.39934 19.3261 8.97684L15.2084 13.4752L16.1802 19.83C16.305 20.6461 15.5412 21.2684 14.8878 20.883L9.79814 17.881L4.70847 20.883C4.05506 21.2684 3.29128 20.6461 3.41607 19.83L4.38785 13.4752L0.270185 8.97684C-0.258503 8.39934 0.0325512 7.39254 0.762806 7.27283L6.4544 6.33976Z" fill="#FFF850"/>
<path d="M30.5716 6.33976L33.1167 0.556788C33.4433 -0.185596 34.3873 -0.185596 34.714 0.556788L37.259 6.33976L42.9507 7.27283C43.6809 7.39254 43.9719 8.39934 43.4433 8.97684L39.3256 13.4752L40.2973 19.83C40.4222 20.6461 39.6584 21.2684 39.005 20.883L33.9153 17.881L28.8257 20.883C28.1722 21.2684 27.4085 20.6461 27.5333 19.83L28.505 13.4752L24.3874 8.97684C23.8587 8.39934 24.1497 7.39254 24.88 7.27283L30.5716 6.33976Z" fill="#FFF850"/>
<path d="M54.6927 6.33976L57.2378 0.556788C57.5644 -0.185596 58.5084 -0.185596 58.8351 0.556788L61.3801 6.33976L67.0718 7.27283C67.802 7.39254 68.093 8.39934 67.5644 8.97684L63.4467 13.4752L64.4184 19.83C64.5433 20.6461 63.7795 21.2684 63.1261 20.883L58.0364 17.881L52.9467 20.883C52.2933 21.2684 51.5296 20.6461 51.6544 19.83L52.6261 13.4752L48.5085 8.97684C47.9798 8.39934 48.2708 7.39254 49.0011 7.27283L54.6927 6.33976Z" fill="#FFF850"/>
<path d="M78.8099 6.33976L81.355 0.556788C81.6816 -0.185596 82.6256 -0.185596 82.9523 0.556788L85.4973 6.33976L91.189 7.27283C91.9192 7.39254 92.2102 8.39934 91.6816 8.97684L87.5638 13.4752L88.5356 19.83C88.6604 20.6461 87.8967 21.2684 87.2432 20.883L82.1536 17.881L77.0639 20.883C76.4105 21.2684 75.6468 20.6461 75.7715 19.83L76.7433 13.4752L72.6257 8.97684C72.097 8.39934 72.388 7.39254 73.1183 7.27283L78.8099 6.33976Z" fill="#FFF850"/>
</svg>
<p style={{color: "#000",

fontSize: "17px", 
fontWeight: 600}}>|</p>
<img src={drapeau} style={{width:"5%"}}/>
<p style={{color: "#000",
border:"solid 1px",
borderRadius:"15px",
paddingLeft:"1%",
paddingRight:"1%",
fontSize: "10px",
fontStyle: "italic",
fontWeight: 300,
}}>Manifacturer/factorie</p>
</div>
<div style={{display:"flex",justifyContent:"end",paddingRight:"3%"}}>
    <button onClick={()=>setfliped(true)} style={{background:"#F84B0E",color:"white",width:"25%",height:"30px",borderRadius:"20px"}}>
      Retourner
    </button>
    </div>
            </div>
          </div>
        </div>
      )}


{ openpopup   &&  flip &&(
        <div className="popup" style={{position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            zIndex:1,
            justifyContent: "center",
            alignItems: "center"}}>
          <div className="popup-content" style={{ backgroundColor: "white",
        padding: "5px",
        borderRadius: "5px",
         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        width: isMobile ? "90%" : "35%", height:"37%"}}>
            <div style={{display:"flex",justifyContent:"end"}}>
            <button className="close-button" style={{
             padding: "5px 10px",
             
             color: "grey",
             border: "none",
             right:0,
              cursor: "pointer"}} onClick={togglePopup}>
              <CloseIcon/>
            </button>
           </div>
           <h1 style={{paddingLeft:"5%",fontWeight:700}}>Details</h1>
           <div style={{paddingLeft:"5%",fontSize:"14px",fontFamily:"Poppins"}}>
           <p><strong>Adresse:</strong> Street 4, road ..............................</p>
           <p><strong>Téléphone:</strong> 087654322229</p>
           <p><strong>Fax:</strong> 087654322229</p>
           <p><strong>Services:</strong> Vente et Achat .............</p>
           <p><strong>Pays:</strong> Algérie</p>
           
            </div>
<div style={{display:"flex",justifyContent:"end",paddingRight:"3%",paddingTop:"3%"}}>
    <button onClick={()=>setfliped(false)} style={{background:"#F84B0E",color:"white",width:"25%",height:"30px",borderRadius:"20px"}}>
      Retourner
    </button>
    </div>
            </div>
          </div>
       
      )}
    </div>
  );
};

export default Card;
