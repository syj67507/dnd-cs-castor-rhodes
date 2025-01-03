import { Typography } from "@mui/material";
import { StyledPaper } from "./StyledPaper";
import { useAppDispatch } from "../app/hooks";
import { cycleTheme } from "../theme/themeSlice";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";

export function Name() {
    const dispatch = useAppDispatch();
    const { data: characterSheet } = useGetCharacterSheetQuery();

    return (
        <StyledPaper
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
            }}
            onClick={() => {
                dispatch(cycleTheme())
            }}
        >
            <Typography variant="h4">Level {characterSheet?.classes.barbarian.level}: {characterSheet?.name}</Typography>
        </StyledPaper>
    );
}