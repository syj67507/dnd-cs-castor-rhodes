import { Box } from "@mui/material";
import { Abilities } from "./Abilities";
import { Skills } from "./Skills";
import { General } from "./General";
import { Details } from "./Proficiencies";

export function PhoneApp() {
    return (
        <Box
            sx={{
                padding: 1,
                display: "grid",
                gap: 1,
                bgcolor: "#624A38",
            }}
        >
            <General />
            <Abilities />
            <Skills />
            <Details />
        </Box>
    );
}