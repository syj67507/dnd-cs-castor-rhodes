import { Typography, OutlinedInput, Stack } from "@mui/material";
import useLocalStorage from "./useLocalStorage";

export function Notes() {
    const [notes, setNotes] = useLocalStorage("notes", "");

    return (
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
                    bgcolor: "#FFF8F6",
                }}
                minRows={10}
                maxRows={10}
                value={notes}
                onChange={(e) => {
                    setNotes(e.target.value);
                }}
            />
        </Stack>
    );
    
}