import { Box, Grid2 as Grid, Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json"
import { Skills } from "./Skills";
import { Abilities } from "./Abilities";
import { Proficiencies } from "./Proficiencies";
import { General } from "./General";

export default function App() {
    const character = characterSheet.character[0];
    console.log(character.abilities_bonuses);
    const statNames = ["cha","con","dex","int","str","wis"] as const;
    return (
        <Box
            sx={{
                padding: 1,
                height: "100vh",
                display: "grid",
                gap: 1,
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                bgcolor: "#624A38",
            }}
        >
            <Box
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
                <Typography variant="h3">Castor Rhodes</Typography>
            </Box>
            <Skills />
            <Abilities />
            <General />
            <Proficiencies />
        </Box>
    );
}

