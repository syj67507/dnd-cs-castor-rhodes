import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { CharacterSelectHeader } from "./CharacterSelectHeader";
import { Character } from "./Character";
import { StyledPaper } from "../dndApp/StyledPaper";
import { CharacterSelectAction } from "./CharacterSelectActions";

export function CharacterSelect() {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                paddingX: 1,
                paddingY: 1,
                bgcolor: theme.background,
                minHeight: "100vh",
            }}
            spacing={1}
        >
            <CharacterSelectHeader />
            <CharacterSelectAction />
            <StyledPaper sx={{
                flex: 1,
            }}>
                <Grid2 container spacing={1}>
                    {[
                        {
                            name: "Castor",
                            level: "5",
                        },
                        {
                            name: "Thaldrin",
                            level: "5",
                        }
                    ].map(char => {
                        return (
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Character name={char.name} level={char.level} />
                            </Grid2>
                        )
                    })}
                </Grid2>
            </StyledPaper>
        </Stack>
    )
}