import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcon from "@mui/material/StepIcon";
import StepConnector from "@mui/material/StepConnector";
import CustomButton from "../../shared/components/CustomButton";
import IgnoreButton from "../../shared/components/IgnoreButton";
import ListMenu from "./components/ListMenu";
import Page1 from "./pages/Page1";
import AllProducts from "./pages/AllProducts";

const steps = [
  "Secteur et Categorie",
  "Remplire information",
  "En attente d'approbation",
];

// Custom StepIcon component to change the color of the steps
const ColorStepIcon = (props) => {
  const { active, completed } = props;
  const activeColor = "#F84B0E";

  return (
    <StepIcon
      {...props}
      style={{
        color: completed ? activeColor : active ? activeColor : "gray",
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
        marginLeft: active ? "0.7cm" : "0", // Adjust the space between steps to 0.7 cm for active step, 0 for others
        marginRight: active ? "0.7cm" : "0", // Adjust the space between steps to 0.7 cm for active step, 0 for others
      }}
    />
  );
};

const Produits = () => {
  const [ListerProduits, setListerProduits] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", fontSize: "1rem" }}>
      {ListerProduits ? (
        <Box sx={{ width: "100%" }}>
          <AllProducts
            setListerProduits={setListerProduits}
            ListerProduits={ListerProduits}
          />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            style={{ backgroundColor: "white" }} // Change the background color to white
            connector={<ColorStepConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorStepIcon}>
                  <span style={{ fontSize: "1rem" }}>{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && <Page1 handleNext={handleNext} />}
          {activeStep === 1 && <ListMenu />}
          {activeStep === 2 && <AllProducts />}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CustomButton
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, backgroundColor: "white", color: "#F84B0E" }}
            >
              Retour
            </CustomButton>
            <CustomButton
              variant="contained"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Suivant
            </CustomButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default Produits;
