import { CssBaseline, Paper } from "@mui/material";
import React, { FC, ReactNode } from "react";

const Wrapper: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <CssBaseline>
        <div>
          <Paper>{props.children}</Paper>
        </div>
      </CssBaseline>
    </>
  );
};

export default Wrapper;
