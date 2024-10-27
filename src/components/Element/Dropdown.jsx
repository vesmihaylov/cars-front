import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Dropdown({
  options,
  label,
  value,
  onChange,
  error,
  helperText,
  getOptionLabel
}) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={getOptionLabel || ((option) => option.name || "")}
      value={value || null}
      onChange={onChange}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={!!error}
          helperText={helperText}
          fullWidth
        />
      )}
    />
  );
}
