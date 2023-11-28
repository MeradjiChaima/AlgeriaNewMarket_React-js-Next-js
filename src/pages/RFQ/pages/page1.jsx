import React from 'react';
import Box1 from '../components/box1';

import OrderBox1 from '../components/OrderBox1';





const page1 = () => {

  

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      
      <br></br>
      <div 
        style={{
          boxShadow: '3px 3px 4px 0px #00000040',
          border: '1px solid #00000026',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginLeft:'1rem',
          marginTop:'25rem',
          marginRight:'1rem'
        }}
      >
        
        
        <br></br>
        <Box1/>
        <br></br>
        <OrderBox1/>
      </div>
    </div>
  )
}
export default page1;
