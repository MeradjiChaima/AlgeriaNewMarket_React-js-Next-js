import React from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import ButtonGroup1 from './components/buttongroup1';
import { useState } from 'react';

const RFQ = () => {
  const [activePage, setActivePage] = useState('Remboursements de commandes'); // Default to the first button

  const handlePageChange = (button) => {
    setActivePage(button);
  };



  const design = false;
  return (
    <>

    {design && <div >
      <ButtonGroup1 onPageChange={handlePageChange} />
      <br />
      {/* Render the content of the active page based on activePage state */}
      {activePage === 'Remboursements de commandes' && <Page1 />}
      {activePage === "Remboursement d'impôts" && <Page2 />}
      {activePage === 'Services après-vente' && <Page3 />}
    </div>}
    {!design && <div >
      <Page4/>
    </div>}
    
    
    </>
  )
}

export default RFQ
