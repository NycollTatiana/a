import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import swal from "sweetalert";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SelectField from "./SelectField";

const currencies = [
  { value: "DNI", label: "DNI" },
  { value: "Pasaporte", label: "Pasaporte" },
];

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const isFormValid =
    formData.nombre.trim() &&
    formData.apellido.trim() &&
    formData.tipoDocumento &&
    /^[0-9]+$/.test(formData.numeroDocumento) &&
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(formData.password) &&
    formData.password === formData.confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isFormValid) {
      swal("Registro exitoso", "", "success");
    } else {
      swal(
        "Por favor, completa correctamente todos los campos.",
        "",
        "warning"
      );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        borderRadius: 2,
        width: "400px",
        backgroundColor: "rgba(255, 255, 255, 0.70)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        component="img"
        src="/img/Logo-Else.png"
        alt="Logo"
        sx={{ width: 300, height: 130, mb: 2.5 }}
      />
      <Typography variant="h6" textAlign="center" mb={2.5}>
        REGISTRO DE USUARIO
      </Typography>

      <InputField
        label="Nombre"
        value={formData.nombre}
        onChange={(val) => handleChange("nombre", val)}
      />
      <InputField
        label="Apellido"
        value={formData.apellido}
        onChange={(val) => handleChange("apellido", val)}
      />
      <SelectField
        value={formData.tipoDocumento}
        onChange={(val) => handleChange("tipoDocumento", val)}
        options={currencies}
      />
      <InputField
        label="Número de documento"
        type="number"
        value={formData.numeroDocumento}
        onChange={(val) => handleChange("numeroDocumento", val)}
      />
      <PasswordField
        label="Contraseña"
        value={formData.password}
        onChange={(val) => handleChange("password", val)}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <PasswordField
        label="Confirmar Contraseña"
        value={formData.confirmPassword}
        onChange={(val) => handleChange("confirmPassword", val)}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={!isFormValid}
        sx={{ mt: 2 }}
      >
        REGISTRAR
      </Button>
    </Box>
  );
};

export default RegistroForm;
