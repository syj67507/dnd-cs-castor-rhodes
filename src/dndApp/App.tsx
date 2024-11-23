import { Box, Grid2 as Grid } from "@mui/material";
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
                gap: 2,
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                bgcolor: "#624A38",
            }}
        >
            <Skills />
            <Abilities />
            <General />
            <Proficiencies />
        </Box>
    );
}

