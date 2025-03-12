import React from "react";
import { TextField } from "@mui/material";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const InputField: React.FC<Props> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <TextField
      required
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={{ mb: 2 }}
    />
  );
};

export default InputField;
