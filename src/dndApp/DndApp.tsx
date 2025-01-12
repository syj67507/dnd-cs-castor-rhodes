import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { Abilities } from "./Abilities";
import { Details } from "./Details";
import { General } from "./general/General";
import { Name } from "./Name";
import { Skills } from "./Skills";
import { SavingThrows } from "./SavingThrows";
import { Notes } from "./Notes";
import { Spells } from "./spells/Spells";
import { SpellSlots } from "./spells/SpellSlots";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";
import { Drawer } from "../routing/Drawer";
import { useParams } from "react-router";

export default function DndApp() {
    const theme = useTheme();

    // Using this query here so that we can have it loaded before rendering everything
    // I didn't want to go through each component that uses the character sheet and add a loading
    // circle
    // As such, all inner components are going under the assumption that the data has been loaded
    const params = useParams()
    const { data, isFetching } = useGetCharacterSheetQuery(params.id || "");

    return (
        <>
            <Drawer />
            {isFetching && (
                <Stack
                    height="100vh"
                    width="100vw"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress />
                </Stack>
            )}
            {!isFetching && data && <Box
                sx={{
                    paddingX: 1,
                    paddingY: 1,
                    gap: 1,
                    bgcolor: theme.background,
                }}
            >
                {isFetching && (
                    <Stack height="100%" justifyContent="center" alignItems="center">
                        <CircularProgress />
                    </Stack>
                )}
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
                            <SpellSlots />
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
                        <Stack spacing={1}>
                            {data.spells.length > 0 && <Spells />}
                            <Details />
                        </Stack>
                    </Grid2>
                </Grid2>
            </Box>}
        </>
    );
}

