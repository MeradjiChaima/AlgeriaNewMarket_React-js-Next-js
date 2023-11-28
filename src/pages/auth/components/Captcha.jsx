/* eslint-disable no-unused-vars */
import React, {useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const MyReCaptcha = () => {
  const [verified, SetVerfied] = useState(false);
   function onChange(value){
    console.log("Captcha value:", value);
    SetVerfied(true) // temporarely till we have a verify function index.js (node)
  }

  return (
    <div>
      {/* When key is avalaible sitekey should be replaced with sitekey={process.env.REACT_APP_SITE_KEY} and both keys 
       should be put in a .env file in the root 
       .env
        REACT_APP_SECRET_KEY = "Your secret key"
        REACT_APP_SITE_KEY = "your site key"
       
       */}
      <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
    </div>

       /*when adding submit button we should add disabled={!verified} so that the user can't get to the next page without verifying */



  );
};

export default MyReCaptcha;