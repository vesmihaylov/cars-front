import React from "react";
import MuiButton from "@mui/material/Button";

const Button = ({
  text,
  startIcon,
  color = "primary",
  variant = "contained",
  ...props
}) => {
  return (
    <MuiButton startIcon={startIcon} color={color} variant={variant} {...props}>
      {text}
    </MuiButton>
  );
};

export default Button;
