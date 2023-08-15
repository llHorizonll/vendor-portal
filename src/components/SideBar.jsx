import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import { useLocation, NavLink } from "react-router-dom";
import { resource } from "@/utils/resource";
import { useAuth } from "@/hooks/useAuth";

export default function Sidebar({ drawerWidth, isOpenSideBar, setOpenSideBar }) {
  const location = useLocation();
  const { logout } = useAuth();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {resource.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={NavLink} to={item.path} selected={item.path === location.pathname}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
      <ListItem disablePadding>
          <ListItemButton component={NavLink} to={"/settings"} selected={"/settings" === location.pathname}>
            <ListItemIcon>
              <Icon>settings</Icon>
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to={"/help"} selected={"/help" === location.pathname}>
            <ListItemIcon>
              <Icon>help_center</Icon>
            </ListItemIcon>
            <ListItemText primary={"Help"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <Icon>logout</Icon>
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List> */}
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: isOpenSideBar ? drawerWidth : 0 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={isOpenSideBar}
        onClose={() => setOpenSideBar(!isOpenSideBar)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: isOpenSideBar ? drawerWidth : 0 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number,
  isOpenSideBar: PropTypes.bool,
  setOpenSideBar: PropTypes.func,
};
