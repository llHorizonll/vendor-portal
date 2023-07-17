import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { Box, Toolbar } from "@mui/material";

const drawerWidth = 240;

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const [isOpenSideBar, setOpenSideBar] = React.useState(true);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar isOpenSideBar={isOpenSideBar} setOpenSideBar={setOpenSideBar} />
      <Box sx={{ display: "flex" }}>
        <Sidebar drawerWidth={drawerWidth} isOpenSideBar={isOpenSideBar} setOpenSideBar={setOpenSideBar} />
        <Box
          component="main"
          sx={{
            width: isOpenSideBar ? `calc(100% - ${drawerWidth}px)` : "100%",
          }}
        >
          <Toolbar />
          {outlet}
        </Box>
      </Box>
    </>
  );
};
