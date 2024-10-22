import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = ({ ...props }) => {
  return (
    <MuiTextField
      {...props}
      variant="outlined"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};

export default TextField;
