import { Box, Grid2, Stack, useTheme } from "@mui/material";
import { Abilities } from "./Abilities";
import { Details } from "./Details";
import { General } from "./General";
import { Name } from "./Name";
import { Skills } from "./Skills";
import { SavingThrows } from "./SavingThrows";
import { Notes } from "./Notes";

export default function DndApp() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                paddingX: 1,
                paddingY: 1,
                gap: 1,
                bgcolor: theme.background,
            }}
        >
            <Grid2 container spacing={1}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 12 }}>
                    <Name />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 12 }}>
                    <Abilities />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 6 }} order={{ lg: 4 }}>
                    <Stack spacing={1}>
                        <General />
                        <Notes />
                    </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 3 }} order={{ lg: 3 }}>
                    <Stack spacing={1}>
                        <SavingThrows />
                        <Skills />
                    </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, lg: 3 }} order={{ lg: 4 }}>
                    <Details />
                </Grid2>
            </Grid2>
        </Box>
    );
}

