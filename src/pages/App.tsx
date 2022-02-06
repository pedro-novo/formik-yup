import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";

import { Wrapper } from "components/layout";
import { AddressForm } from "components/organisms/forms";
import initialValues from "utils/initial-values";

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddressForm />;
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
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>{renderStepContent(activeStep)}</Form>
      </Formik>
    </Wrapper>
  );
};

export default App;
