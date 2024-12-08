import { Typography } from "@mui/material";
import characterSheet from "./character-sheet.json"
import { StyledPaper } from "./StyledPaper";

export function Name() {
    const character = characterSheet.character[0];

    return (
        <StyledPaper
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
        >
            <Typography variant="h4">{character.character_name}</Typography>
        </StyledPaper>
    );
}