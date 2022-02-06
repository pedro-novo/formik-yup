import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";

import { Wrapper } from "components/layout";

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <div>Shipping address</div>;
    case 1:
      return <div>Payment Details</div>;
    case 2:
      return <div>Review your Order</div>;
  }
};

const steps = ["Shipping address", "Payment details", "Review your order"];

const App = () => {
  const [activeStep, activeStepSet] = useState(0);

  return (
    <Wrapper>
      <Typography>Checkout</Typography>
      <Stepper>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  );
};

export default App;
