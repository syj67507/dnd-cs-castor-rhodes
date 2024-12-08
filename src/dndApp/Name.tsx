import { Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json"
import { StyledPaper } from "./StyledPaper";

export function Name() {
    return (
        <StyledPaper
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
            }}
        >
            <Typography variant="h4">Level {characterSheet.classes.barbarian.level}: {characterSheet.name}</Typography>
        </StyledPaper>
    );
}