import React from 'react';

import Box2 from '../components/box2';
import OrderBox2 from '../components/OrderBox2';





const page2 = () => {

  

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      
      
      <div 
        style={{
          boxShadow: '3px 3px 4px 0px #00000040',
          border: '1px solid #00000026',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginLeft:'1.5rem',
          marginTop:'25rem',
          marginRight:'1.5rem',
          marginBottom:'1rem',
        }}
      >
      
        <br></br>
        <Box2></Box2>
        <br></br>
        <OrderBox2></OrderBox2>
        <br></br>
        
      </div>
    </div>
  )
}
export default page2;
