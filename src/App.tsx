import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import swal from "sweetalert";

function App() {
  const currencies = [
    { value: "DNI", label: "DNI" },
    { value: "Pasaporte", label: "Pasaporte" },
  ];

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isNombreValid = nombre.trim().length > 0;
  const isApellidoValid = apellido.trim().length > 0;
  const isTipoDocumentoValid = tipoDocumento !== "";
  const isNumeroDocumentoValid = /^[0-9]+$/.test(numeroDocumento);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(
    password
  );
  const isConfirmPasswordValid = password === confirmPassword;

  const isFormValid =
    isNombreValid &&
    isApellidoValid &&
    isTipoDocumentoValid &&
    isNumeroDocumentoValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isFormValid) {
      swal("Registro exitoso", " ", "success");
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
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Fondo gris
      }}
    >
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
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          component="img"
          src="\img\logoELSE_SIELSE.jpg"
          alt="Logo de la empresa"
          sx={{ width: 100, height: 120, mb: 2.5 }}
        />
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2.5}>
          REGISTRO DE USUARIO
        </Typography>

        <TextField
          required
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z\s]*$/.test(value)) {
              setNombre(value);
            }
          }}
          error={!isNombreValid && nombre !== ""}
          helperText={
            !isNombreValid && nombre !== "" ? "Campo obligatorio" : ""
          }
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          required
          label="Apellido"
          variant="outlined"
          value={apellido}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z\s]*$/.test(value)) {
              setApellido(value);
            }
          }}
          error={!isApellidoValid && apellido !== ""}
          helperText={
            !isApellidoValid && apellido !== "" ? "Campo obligatorio" : ""
          }
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          required
          select
          label="Tipo de documento"
          variant="outlined"
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
          error={!isTipoDocumentoValid && tipoDocumento !== ""}
          helperText={
            !isTipoDocumentoValid && tipoDocumento !== ""
              ? "Seleccione una opción"
              : ""
          }
          fullWidth
          sx={{ mb: 2 }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          label="Número de documento"
          variant="outlined"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={numeroDocumento}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[0-9]*$/.test(value)) {
              setNumeroDocumento(value);
            }
          }}
          error={!isNumeroDocumentoValid && numeroDocumento !== ""}
          helperText={
            !isNumeroDocumentoValid && numeroDocumento !== ""
              ? "Solo números"
              : ""
          }
          fullWidth
          sx={{ mb: 2 }}
        />

        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
          <InputLabel required>Contraseña</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!isPasswordValid && password !== ""}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña"
          />
          {!isPasswordValid && password !== "" && (
            <Typography variant="caption" color="error">
              Mínimo 6 caracteres, una mayúscula, un número y un símbolo.
            </Typography>
          )}
        </FormControl>

        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
          <InputLabel required>Confirmar Contraseña</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!isConfirmPasswordValid && confirmPassword !== ""}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirmar Contraseña"
          />
          {!isConfirmPasswordValid && confirmPassword !== "" && (
            <Typography variant="caption" color="error">
              Las contraseñas no coinciden.
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          disabled={!isFormValid}
          sx={{ mt: 2 }}
        >
          REGISTRAR
        </Button>
      </Box>
    </Box>
  );
}

export default App;
