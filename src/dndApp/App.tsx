import { Box, Paper, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json"
import { Skills } from "./Skills";
import { Abilities } from "./Abilities";
import { Details } from "./Proficiencies";
import { General } from "./General";

export default function App() {
    const character = characterSheet.character[0];
    console.log(character.abilities_bonuses);
    return (
        <Box
            sx={{
                padding: 1,
                height: "100vh",
                display: "grid",
                gap: 1,
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(8, 1fr)",
                bgcolor: "#624A38",
            }}
        >
            <Paper
                sx={{
                    gridColumnStart: "2",
                    gridColumnEnd: "span 2",
                    bgcolor: "#FFE8E1",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography variant="h3">{character.character_name}</Typography>
            </Paper>
            <Skills />
            <Abilities />
            <General />
            <Details />
        </Box>
    );
}

