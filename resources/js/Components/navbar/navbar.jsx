import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",

            primary: {
                main: "#8080F5",
                light: "#607d8b",
                dark: "#212121",
            },
            secondary: {
                main: "#f44336",
                light: "#e5735e",
                dark: "#af2b2b",
            },
            background: {
                paper: "#0A0A0A",
                default: "#121212",
            },
            text: {
                primary: "#c0c0c3",
                secondary: "#c0c0c0",
                disabled: "#878783",
            },
        },
        typography: {
            fontFamily: "", // Add DM-Sans font family
        },
    });
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <AppBar
                    sx={{
                        background: "transparent",
                        backdropFilter: "blur(10px)",
                        height: "80px",
                    }}
                    component="nav"
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2.5, mt: 2.5, display: { sm: "none" } }}
                        >
                            <FaBars />
                        </IconButton>
                        <Box
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            <div className="flex w-20 h-20 mb-1">
                                <div className="flex items-center justify-center w-full h-full">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={logo}
                                    />
                                </div>
                            </div>
                        </Box>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <Button sx={{ color: "#fff" }}>SOBRE</Button>
                            <Button sx={{ color: "#fff" }}>SERVIÇOS</Button>
                            <Button sx={{ color: "#fff" }}>DEPOIMENTOS</Button>
                            <Button sx={{ color: "#fff" }}>CONTATO</Button>
                            <Button sx={{ color: "#fff" }}>PORTFÓLIO</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
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
                </nav>
            </ThemeProvider>
        </Box>
    );
}

export default DrawerAppBar;
