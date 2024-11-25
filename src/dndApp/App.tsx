import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import characterSheet from "./character-sheet.json"
import { Skills } from "./Skills";
import { Abilities } from "./Abilities";
import { Details } from "./Proficiencies";
import { General } from "./General";
import { PhoneApp } from "./PhoneApp";

export default function App() {
    const isPortrait = useMediaQuery('(orientation: portrait)');
    const isLandscape = useMediaQuery('(orientation: landscape)');
    
    const character = characterSheet.character[0];

    return (
        <>
        {isLandscape && <Box
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
            <Skills
                gridColumn="1"
                gridRowStart="2"
                gridRowEnd="span 7"
            />
            <Abilities
                gridColumnStart="2"
                gridColumnEnd="span 3"
                gridRowStart="2"
                gridRowEnd="span 1"
            />
            <General
                gridColumnStart="2"
                gridColumnEnd="span 2"
                gridRowStart="3"
                gridRowEnd="span 6"
            />
            <Details
                gridColumnStart="4"
                gridColumnEnd="span 1"
                gridRowStart="3"
                gridRowEnd="span 6"
            />
        </Box>}
        {isPortrait && <PhoneApp />}
        </>
    );
}

