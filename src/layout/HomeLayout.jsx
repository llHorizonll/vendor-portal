import { useContext } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Box, IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "@/utils/themes";

const HomeLayout = () => {
  const { user } = useAuth();
  const { mode, setMode } = useContext(ColorModeContext);
  const outlet = useOutlet();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          color="inherit"
          onClick={() => {
            if (mode === "light") {
              setMode("dark");
            } else {
              setMode("light");
            }
          }}
        >
          {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
      </Box>

      {outlet}
    </>
  );
};

export default HomeLayout;
