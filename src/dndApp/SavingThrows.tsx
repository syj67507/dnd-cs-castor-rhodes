import { Box, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";

export function SavingThrows() {
    const skills = characterSheet.saving_throws;

    return (
        <StyledPaper>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Saving Throws</Typography>
                {
                    skills.map(({ name, modifier, proficient }) => {
                        return (
                            <Skill name={name} statValue={modifier} proficient={proficient} />
                        );
                    })
                }
            </Box>
        </StyledPaper>
    );
}

interface SavingThrowsProps {
    name: string;
    statValue: string | boolean;
    proficient: boolean;
}
export function Skill({ name, statValue, proficient }: SavingThrowsProps) {
    const skillName = `${name.slice(0,1).toUpperCase()}${name.slice(1)}`.replace(/-/g, " ")

    return (
        <>
            <StyledStack
                direction="row"
                width="100%"
                justifyContent="space-between"
            >
                <Typography variant="body1"
                    sx={{
                        fontWeight: proficient ? "bold" : "normal",
                    }}
                >
                    {skillName}
                </Typography>
                <Typography variant="body1"
                    sx={{
                        fontWeight: proficient ? "bold" : "normal",
                    }}
                >
                    {statValue}
                </Typography>
            </StyledStack>
        </>
    );

}