import { Box, Paper, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { StyledStack } from "./StyledStack";

export function SavingThrows() {
    const skills = characterSheet.saving_throws;

    return (
        <Paper
            sx={{
                padding: 1,
                overflow: "auto",
                bgcolor: "#FFE8E1",
            }}
        > 
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Saving Throws</Typography>
                {
                    skills.map(({ name, modifier }) => {
                        return (
                            <Skill name={name} statValue={modifier} />
                        );
                    })
                }
            </Box>
        </Paper>
    );
}

interface SavingThrowsProps {
    name: string;
    statValue: string | boolean;
}
export function Skill({ name, statValue }: SavingThrowsProps) {
    const skillName = `${name.slice(0,1).toUpperCase()}${name.slice(1)}`.replace(/-/g, " ")

    return (
        <>
            <StyledStack
                direction="row"
                width="100%"
                justifyContent="space-between"
            >
                <Typography variant="body1">
                    {skillName}
                </Typography>
                <Typography variant="body1">
                    {statValue}
                </Typography>
            </StyledStack>
        </>
    );

}