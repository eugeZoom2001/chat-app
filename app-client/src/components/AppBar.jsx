import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["Home", "Chat", "Contact"];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
           <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton
            component={NavLink}
            to={"./"}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"ChatPage"} disablePadding>
          <ListItemButton
            component={NavLink}
            to={"ChatPage"}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={"Chat"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Contact"} disablePadding>
          <ListItemButton
            component={NavLink}
            to={"Contact"}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={"Contact"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              App
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button component={NavLink} to={"/"} sx={{ color: "#fff" }}>
                {"Home"}
              </Button>
              <Button component={NavLink} to={"/ChatPage"} sx={{ color: "#fff" }}>
                {"Chat"}
              </Button>
              <Button
                component={NavLink}
                to={"/Contact"}
                sx={{ color: "#fff" }}
              >
                {"Contact"}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
