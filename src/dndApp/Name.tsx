import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { StyledPaper } from "./StyledPaper";
import { useAppDispatch } from "../app/hooks";
import { cycleTheme } from "../theme/themeSlice";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";
import MenuIcon from '@mui/icons-material/Menu';
import { setDrawerOpen } from "../routing/drawerSlice";


export function Name() {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { data: characterSheet } = useGetCharacterSheetQuery();

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
                Level {characterSheet?.classes.barbarian.level}: {characterSheet?.name}
            </Typography>
            <Box flex={1} /> {/* This box is used to help center the name while having the menu icon on the left */}
        </StyledPaper>
    );
}