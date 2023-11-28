import React, { useState } from 'react';
import ButttonGroup from "./components/ButtonGroup";
import SearchBar from './components/SearchBar';
import Page1 from "./pages/page1";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import OrderDisplay from './components/OrderDisplay';
import AllOrders from './components/AllOrders';

const Commandes = () => {
  const [currentPage,setCurrentPage ] = useState("toutes")
  const handleButtonChange=(button)=>{
  setCurrentPage(button);
  }

  return (
  
    <div className='w-full h-screen '>
    <ButttonGroup currantActiveButton={currentPage} onButtonChange={handleButtonChange}/>
    <br/>
    <br/>
    <SearchBar/>   
   
    {currentPage === "toutes" && (
        <Page1/>
      )}

      {currentPage === "À confirmer" && (
      <Page3/>
      )}

      {currentPage === "non payé" && (
         <Page4/>
      )}

      {currentPage === "À expédier"&& (
         <Page5 />
       
        
      )}
  
    <AllOrders/>
    {/* <OrderDisplay/> */}



    </div>
  )
}

export default Commandes
