import { useState, useContext } from "react";
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, Icon, IconButton } from "@mui/material";
import { useAuth } from "@/hooks/useAuth";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "@/utils/themes";
import PropTypes from "prop-types";

export default function Navbar({ isOpenSideBar, setOpenSideBar }) {
  const { user, logout } = useAuth();
  const { mode, setMode } = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenSideBar(!isOpenSideBar)}
            sx={{ mr: 2 }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vendor Portal
          </Typography>
          <div>
            {user.username ?? "alma.lawson@example.com"}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Icon>account_circle</Icon>
            </IconButton>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem sx={{ padding: "4px 20px" }} onClick={handleClose}>
                {" "}
                <Icon sx={{ marginRight: 2 }}>account_box</Icon> Profile
              </MenuItem>
              <MenuItem sx={{ padding: "4px 20px" }} onClick={logout}>
                {" "}
                <Icon sx={{ marginRight: 2 }}>logout</Icon> Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  isOpenSideBar: PropTypes.bool,
  setOpenSideBar: PropTypes.func,
};
