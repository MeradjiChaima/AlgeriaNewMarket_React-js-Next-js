import React from 'react'
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Diamond from '/diamond.png'
const StyledUpgradeButton = styled(Button)({
    fontFamily: "Open Sans",
    fontWeight: "bold",
    textTransform: "none",
    color: "rgba(248, 75, 14, 1)",
    borderRadius: 23,
    backgroundColor: "white",
    gap:'15%',
    paddingLeft:'30%',
    paddingRight:'30%',
    paddingBottom:'8%',
    paddingTop:'8%',
    border:"0.2rem solid rgba(255, 138, 0, 1)", 
    "&:hover": {
      backgroundColor: "rgba(248, 75, 14, 0.64)",  
      color:"white", 
      border:'0.2rem solid white',
      
    },
  });
export default function UpgradeButton() {
  return (
    <>
    <StyledUpgradeButton>
    <img src={Diamond}/> 
        Upgrade
        
    </StyledUpgradeButton>
    </>
  )
}



 
