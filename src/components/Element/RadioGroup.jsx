import React from "react";
import { Radio, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import MuiRadioGroup from "@mui/material/RadioGroup";

export default function RadioGroup({
  label,
  defaultValue,
  options,
  onChange,
  fieldType,
}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <MuiRadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        onChange={(e) => onChange(e, null, fieldType)}
      >
        {Object.entries(options).map(([key, option]) => {
          return (
            <FormControlLabel
              key={key}
              value={option.id}
              control={<Radio />}
              label={option.value}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
}
