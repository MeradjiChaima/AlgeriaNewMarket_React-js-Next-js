import * as React from 'react';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepIcon from '@mui/material/StepIcon';
import StepConnector from '@mui/material/StepConnector';

import CustomButton from "../../../shared/components/CustomButton";
import IgnoreButton from "../../../shared/components/IgnoreButton";

import Page4 from '../pages/Page4';
import Page3 from '../pages/Page3';
import Page2 from '../pages/Page2';
import Page1 from '../pages/Page1';

const steps = [
  "Profil de l'entreprise",
  "Fabrication",
  "Capacité d'exploration",
  "Centre de certification et d’Agrément"
];

// Custom StepIcon component to change the color of the steps
const ColorStepIcon = (props) => {
  const { active, completed } = props;
  const activeColor = '#F84B0E';

  return (
    <StepIcon
      {...props}
      style={{
        color: completed ? activeColor : active ? activeColor : 'gray',
      }}
    />
  );
};

// Custom StepConnector component to adjust the spacing between steps
const ColorStepConnector = (props) => {
  const { active } = props;
  return (
    <StepConnector
      {...props}
      style={{
        marginLeft: active ? '0.7cm' : '0', // Adjust the space between steps to 0.7 cm for active step, 0 for others
        marginRight: active ? '0.7cm' : '0', // Adjust the space between steps to 0.7 cm for active step, 0 for others
      }}
    />
  );
};

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', fontSize: '1rem'}}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ backgroundColor: 'white' }} // Change the background color to white
        connector={<ColorStepConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorStepIcon}>
              <span style={{ fontSize: '1rem' }}>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <IgnoreButton
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1, backgroundColor: 'white', color: '#F84B0E' }}
        >
          Retour
        </IgnoreButton>
        <CustomButton
          variant="contained"
          onClick={handleNext}
          
          disabled={activeStep === steps.length - 1}
        >
          Suivant
        </CustomButton>
      </Box>

      {activeStep === 0 && (
        <Page1/>
      )}

      {activeStep === 1 && (
        <Page2/>
      )}

      {activeStep === 2 && (
        <Page3/>
      )}

      {activeStep === 3 && (
        
        <Page4/>
        
      )}

    </Box>
  );
}
