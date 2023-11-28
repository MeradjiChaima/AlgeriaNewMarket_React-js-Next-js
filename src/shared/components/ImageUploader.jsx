import React, { useEffect } from 'react';
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function ImageUploader ({importimages , limit , initialImages ,  disabled }){
  //we will need to pass a callbackfunction importimages to 
  // this component to send our filesarray 
  const [selectedImages, setSelectedImages] = useState(initialImages || []);
 const [filesarray,setfilesarray]=useState([]);
  const onSelectFile = (event) => {
    if (disabled) {
      return; // Do nothing if disabled
    }
    else {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const files=selectedFilesArray.map((file)=>{
      return(file);
    })
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
   
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setfilesarray((previousFile)=>previousFile.concat(files));
    
    event.target.value = ""; }
  };
  
  useEffect(() => {
    //to update changes we did on the filesarray
  importimages(filesarray); 
  }, [filesarray]);

  function deleteHandler(image,index) {
    if (disabled) {
      return; // Do nothing if disabled
    }
    else {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    setfilesarray((prevFilesArray) => prevFilesArray.filter((file, i) => i !== index));
    URL.revokeObjectURL(image); }
  }
  
  return (
    <div className="photo">
<section>
<div className="images" style={{display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'flex-start',
        width:"100%",
        alignItems: "center",
       margin:" 1rem 0.5rem",
       position: "relative",
       marginBottom:"0%",
      }}>
       {selectedImages &&
         selectedImages.map((image, index) => {
           return (
             <div key={image}  className="image"  style={{
              border:"100px", width: ' 83px',
              marginBottom:"1%",
               height: '84px',borderRadius: "11.089px",
               position:"relative",marginRight:"4px"}} >
            {!disabled &&
             <button style={{position: "absolute",
               top: "-4px",
             right: "-4px",
             width:"13px",
             height:"13px",
             backgroundColor: "red",
             borderRadius:"10px",
             border: "none",
             cursor: "pointer",
             padding: "5px"}}  onClick={() => deleteHandler(image,index)}>
              <CloseOutlinedIcon sx={{ color:"white",width:"11px",
               marginTop:"-26px",marginLeft:"-4px",height:"auto"}}/>
              </button> }
               <img  src={image}  style={{  width: '100%',
            height: '100%', 
      objectFit: "cover",borderRadius: "11.089px"}} alt="upload" />
              
             </div>
           );
         })}
      
        { (!disabled && selectedImages.length < limit )  &&
        <label style={{ margin: 0,
          display: "flex",
          marginBottom:"1%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "0.616px dashed #4C535F",
          borderRadius: '11.089px',
          flexShrink: 0,
          background: "#EDF2F6",
          width: ' 83px',
          height: '84px',
          cursor: 'pointer',
          fontSize: 'large'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52316 4.90968C6.98848 4.59673 7.53554 4.42969 8.09517 4.42969C8.45447 4.42969 8.74574 4.72287 8.74574 5.08453C8.74574 5.44619 8.45447 5.73937 8.09517 5.73937C7.79288 5.73937 7.49738 5.8296 7.24603 5.99865C6.99469 6.16769 6.79879 6.40797 6.68311 6.68908C6.56743 6.97019 6.53716 7.27952 6.59613 7.57795C6.65511 7.87638 6.80067 8.15051 7.01443 8.36566C7.22818 8.58082 7.50051 8.72734 7.79699 8.7867C8.09348 8.84606 8.40079 8.8156 8.68007 8.69915C8.95935 8.58271 9.19805 8.38553 9.36599 8.13253C9.53394 7.87954 9.62358 7.58209 9.62358 7.27782C9.62358 6.91616 9.91485 6.62297 10.2741 6.62297C10.6334 6.62297 10.9247 6.91616 10.9247 7.27782C10.9247 7.84112 10.7588 8.39178 10.4479 8.86015C10.1369 9.32853 9.69502 9.69358 9.17799 9.90915C8.66096 10.1247 8.09203 10.1811 7.54315 10.0712C6.99428 9.96133 6.4901 9.69007 6.09438 9.29175C5.69866 8.89343 5.42917 8.38594 5.32 7.83346C5.21082 7.28098 5.26685 6.70831 5.48101 6.18789C5.69517 5.66746 6.05784 5.22264 6.52316 4.90968Z" fill="#8D98AA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2295 8.22852C22.5837 8.22852 22.8707 8.52349 22.8707 8.88737V14.4042C22.8707 17.2263 22.3284 19.3733 20.9491 20.7985C19.5689 22.2246 17.4888 22.7856 14.7556 22.7856H8.34951C5.6172 22.7856 3.53713 22.2249 2.15673 20.7989C0.777161 19.3738 0.234375 17.2269 0.234375 14.4042V12.186C0.234375 11.8221 0.521454 11.5272 0.875583 11.5272C1.22971 11.5272 1.51679 11.8221 1.51679 12.186V14.4042C1.51679 17.0982 2.04269 18.8126 3.06594 19.8696C4.08835 20.9258 5.74526 21.4679 8.34951 21.4679H14.7556C17.3607 21.4679 19.0176 20.9256 20.0398 19.8694C21.0628 18.8122 21.5883 17.0979 21.5883 14.4042V8.88737C21.5883 8.52349 21.8754 8.22852 22.2295 8.22852Z" fill="#8D98AA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.18341 1.9464C3.58218 0.549521 5.68993 0 8.4606 0H12.7923C13.1494 0 13.4389 0.289122 13.4389 0.645772C13.4389 1.00242 13.1494 1.29154 12.7923 1.29154H8.4606C5.81753 1.29154 4.13549 1.82348 3.09791 2.85965C2.06032 3.89583 1.52767 5.57559 1.52767 8.21508C1.52767 8.57173 1.23816 8.86085 0.881023 8.86085C0.523889 8.86085 0.234375 8.57173 0.234375 8.21508C0.234375 5.44816 0.784641 3.34327 2.18341 1.9464Z" fill="#8D98AA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6953 3.79698C14.6953 3.44743 14.9967 3.16406 15.3684 3.16406H21.5677C21.9394 3.16406 22.2408 3.44743 22.2408 3.79698C22.2408 4.14653 21.9394 4.4299 21.5677 4.4299H15.3684C14.9967 4.4299 14.6953 4.14653 14.6953 3.79698Z" fill="#8D98AA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4725 0C18.8198 0 19.1013 0.303319 19.1013 0.677481V6.91753C19.1013 7.2917 18.8198 7.59501 18.4725 7.59501C18.1253 7.59501 17.8438 7.2917 17.8438 6.91753V0.677481C17.8438 0.303319 18.1253 0 18.4725 0Z" fill="#8D98AA"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8679 12.4528L13.4177 16.3303L13.4059 16.3404C12.8649 16.7894 12.186 17.0348 11.4855 17.0348C10.7849 17.0348 10.106 16.7894 9.565 16.3404C9.55917 16.3355 9.55342 16.3306 9.54776 16.3256L9.20424 16.0194C8.91657 15.7858 8.56323 15.6493 8.19423 15.6294C7.82296 15.6094 7.45498 15.7086 7.14308 15.9126L1.86368 19.5093C1.56899 19.7101 1.16876 19.6318 0.969735 19.3346C0.770708 19.0373 0.848255 18.6336 1.14294 18.4328L6.43556 14.8271C6.97716 14.4708 7.61712 14.2976 8.26282 14.3323C8.90851 14.367 9.52652 14.608 10.0275 15.0204C10.034 15.0258 10.0404 15.0313 10.0467 15.0369L10.3912 15.3439C10.7004 15.5974 11.0868 15.7359 11.4855 15.7359C11.8852 15.7359 12.2726 15.5966 12.5822 15.3418L17.0324 11.4643L17.0442 11.4542C17.5852 11.0052 18.2641 10.7598 18.9647 10.7598C19.6652 10.7598 20.3441 11.0052 20.8851 11.4542L20.8969 11.4643L22.644 12.9867C22.9131 13.2212 22.9428 13.6313 22.7103 13.9028C22.4778 14.1742 22.0712 14.2041 21.8022 13.9697L20.0614 12.4528C19.7518 12.198 19.3644 12.0587 18.9647 12.0587C18.5649 12.0587 18.1775 12.198 17.8679 12.4528Z" fill="#8D98AA"/>
</svg>
     
     <span style={{ color: "#4C535F",
     width: "59.106px",
     height: "20.547px",
     flexShrink: 0,
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "8px",
    marginTop:"3px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"}}>Ajouter une photo</span>
     <input
       type="file"
       name="images"
       style={{
        display:"none"
       }}
       onChange={onSelectFile}
       multiple
       accept="image/png , image/jpeg, image/webp"
     />
   </label>
        }
     </div>
     {!disabled &&
     <label style={{color: "rgba(0, 0, 0, 0.40)",
     fontSize: "13px",
     fontStyle: "normal",
     fontWeight: 600,
     marginLeft:"1%",
     marginTop:"0%"
     }}>taille maximale 2Mb (format png/jpg)</label> }
     
   </section>
    </div>
   
 );
  
};

export default ImageUploader;
