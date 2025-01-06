import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledPaper } from "../dndApp/StyledPaper";
import { setDrawerOpen } from "../routing/drawerSlice";
import { cycleTheme } from "../theme/themeSlice";
import { useAppDispatch } from "../app/hooks";
import MenuIcon from '@mui/icons-material/Menu';

export function CharacterSelectHeader() {
    const dispatch = useAppDispatch();
    const theme = useTheme();

    return (
        <StyledPaper
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Box
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="flex-start"
            >
                <IconButton sx={{ color: theme.navigationIconColor }} onClick={() => dispatch(setDrawerOpen(true))}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Typography
                variant="h4"
                onClick={() => dispatch(cycleTheme())}
            >
                Character Select
            </Typography>
            <Box flex={1} /> {/* This box is used to help center the name while having the menu icon on the left */}
        </StyledPaper>
    )
}