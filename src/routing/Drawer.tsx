import { Box, Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setDrawerOpen } from "./drawerSlice";
import { Group as GroupIcon } from "@mui/icons-material";
import { Article as ArticleIcon  } from "@mui/icons-material";

export function Drawer() {
    const theme = useTheme();
    const isDrawerOpen = useAppSelector(state => state.drawer.open);
    const dispatch = useAppDispatch();

    return (
        <MuiDrawer
            open={isDrawerOpen}
            onClose={() => dispatch(setDrawerOpen(false))}
            PaperProps={{
                sx: {
                    bgcolor: theme.unitBackground,
                }
            }}
        >
            <Box width="250px">
                <List>
                    <ListItem disablePadding>
                        <Link
                            to="/dnd-cs-castor-rhodes/sheet"
                            style={{ width: "100%", color: "inherit", textDecoration: "none" }}
                            onClick={() => dispatch(setDrawerOpen(false))}
                        >
                            <ListItemButton>
                                <ListItemIcon><ArticleIcon sx={{ color: theme.navigationIconColor }} /></ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="body1"
                                        sx={{ textDecoration: location.pathname === "/dnd-cs-castor-rhodes/sheet" ? "underline" : undefined }}
                                    >
                                        Sheet
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link
                            to="/dnd-cs-castor-rhodes"
                            style={{ width: "100%", color: "inherit", textDecoration: "none" }}
                            onClick={() => dispatch(setDrawerOpen(false))}>
                            <ListItemButton>
                                <ListItemIcon><GroupIcon sx={{ color: theme.navigationIconColor }} /></ListItemIcon>
                                <ListItemText>
                                <Typography
                                        variant="body1"
                                        sx={{ textDecoration: location.pathname === "/dnd-cs-castor-rhodes" ? "underline" : undefined }}
                                    >
                                        Characters
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </MuiDrawer>
    )
    
}