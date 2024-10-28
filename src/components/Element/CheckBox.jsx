import * as React from "react";
import MuiCheckbox from "@mui/material/Checkbox";

export default function CheckBox({ defaultChecked = false, onChange, value }) {
  return (
    <MuiCheckbox
      defaultChecked={defaultChecked}
      onChange={onChange}
      value={value}
    />
  );
}
