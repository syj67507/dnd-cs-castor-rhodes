import { Paper, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json"

export function Name() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
                bgcolor: "#FFE8E1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h4">{character.character_name}</Typography>
        </Paper>
    );
}