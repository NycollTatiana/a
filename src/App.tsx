import { Box } from "@mui/material";
import RegistroForm from "./components/RegistroForm"; // ✅

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/fondo.jpg')",
      }}
    >
      <RegistroForm />
    </Box>
  );
}

export default App;
