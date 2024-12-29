import { Typography, OutlinedInput, Stack, useTheme } from "@mui/material";
import useLocalStorage from "./useLocalStorage";
import { StyledPaper } from "./StyledPaper";

export function Notes() {
    const theme = useTheme();
    const [notes, setNotes] = useLocalStorage("notes", "");

    return (
        <StyledPaper>
            <Stack
                spacing={1}
                width="100%"
                alignItems="center"
            >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Notes</Typography>
                <OutlinedInput
                    fullWidth
                    multiline
                    sx={{
                        height: "100%",
                        borderRadius: theme.borderRadius,
                        bgcolor: theme.unitBackground,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: theme.borderRadius,
                            border: theme.border,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderRadius: theme.borderRadius,
                            border: theme.borderHover,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderRadius: theme.borderRadius,
                            border: theme.borderHover,
                        },
                    }}
                    minRows={20}
                    maxRows={20}
                    value={notes}
                    onChange={(e) => {
                        setNotes(e.target.value);
                    }}
                />
            </Stack>
        </StyledPaper>
    );
    
}