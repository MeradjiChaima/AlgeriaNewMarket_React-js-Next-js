import Dropdown from "./Dropdown";
import OtpPopUp from "../../pages/auth/components/OtpPopUp";
import CustomButton from "./CustomButton";
import StyledInfoTitle from "../../pages/auth/components/infoTItle";
import StyledWarningTitle from "../../pages/auth/components/warningTitle";

import * as React from "react";
//for CardRadio
import RadioCard from "./CardRadio";

//for the radio components
import RadioButtons from "./RadioComponent";
import { Box, Container } from "@mui/material";
import BlueCheckbox from "../../pages/company/components/BlueCheckBox";
import OrangeCheckBox from "./OrangeCheckBox";
import ProduitCard from "../../pages/produits/components/ProduitCard";
import SearchBar from "./SearchBar"; 
import ImageUploader from './ImageUploader';
import StepperComponent from '../../pages/company/components/stepper';
import IgnoreButton from './IgnoreButton';
import PourcentageField from '../../pages/company/components/PourcentageField';
import DateInput from '../../pages/company/components/DateInput';
import ListMenu from '../../pages/company/components/ListMenu';
import Buttonswitch from '../../pages/company/components/buttonSwitch';
import TextFieldHiddenLabel from './TextFieldHiddenLabel';
import DropdownLanguage from './dropmenulanguage';
import TotalField from '../../pages/company/components/TotalField'
import MyReCaptcha from '../../pages/auth/components/Captcha'






export default function Test() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const limit=4;
  const importimages =(imag)=>{
    console.log(imag);
}

  return (
    <>
      <CustomButton>test</CustomButton>
      <Dropdown></Dropdown>
      <StyledInfoTitle/>
      <OtpPopUp></OtpPopUp>
      <StyledWarningTitle/>
      <Container>
        <RadioButtons
          value="a"
          checked={selectedValue === "a"}
          onChange={handleChange}
        />

        <RadioCard
          width={350}
          text1="Téléchargement des documents vérifiés"
          text2="Obtenez le résultat dans les 2 à 4 jours ouvrables"
          name="agree"
          value="b"
          checked={selectedValue === "b"}
          onChange={handleChange}
        />
      </Container>
      <BlueCheckbox></BlueCheckbox>
      <OrangeCheckBox/>

      <SearchBar/>
      <div className="photo">
      <ImageUploader importimages={importimages}
       limit={limit}
      />
      </div>
   
      <StepperComponent/>
      <IgnoreButton>ignorer</IgnoreButton>
      <PourcentageField/>
      <DateInput/>
      <ListMenu/>
      <Buttonswitch/>
      <TextFieldHiddenLabel/>
      <DropdownLanguage/>
      <TotalField/>     
      <MyReCaptcha/>

      
      
    </>
  );
}

 
