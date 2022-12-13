import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HelpIcon from "@mui/icons-material/Help";
import "./drawer.css";

const drawerWidth = 300;

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Payments", "Profile", "Receipts", "Help", "Logout"];

  const setIcon = (item) => {
switch(item){
  case "Payments":
    return <AttachMoneyIcon/>
  case "Profile":
    return <PersonIcon/>
  case "Receipts":
    return <ReceiptIcon/>
  case "Help":
    return <HelpIcon/>
  case "Logout":
    return <LogoutIcon/>  
}
  };

  const drawer = (
    <div>
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{setIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* <Drawer
          container={container}
          variant="permanent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer> */}
        <Drawer
          variant="permanent"
          classes={{ paper: "drawer_main" }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
