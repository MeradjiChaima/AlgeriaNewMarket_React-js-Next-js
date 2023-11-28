import React from 'react';

import Box2 from '../components/box2';
import OrderBox3 from '../components/OrderBox3';





const page3 = () => {

  

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
          marginLeft:'1.5rem',
          marginRight:'1.5rem',
          marginTop:'25rem',
          marginBottom: '2rem'
        }}
      >
        
        <br></br>
        <br></br>
        <Box2></Box2>
        <br></br>
        <OrderBox3></OrderBox3>
        
        <br></br>
        
      </div>
    </div>
  )
}
export default page3;
