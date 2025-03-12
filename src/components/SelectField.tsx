import React from "react";
import { MenuItem, TextField } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const SelectField: React.FC<Props> = ({ value, onChange, options }) => {
  return (
    <TextField
      required
      select
      label="Tipo de documento"
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ mb: 2 }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
