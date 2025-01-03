import { Box, Typography } from "@mui/material";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";

export function SavingThrows() {
    const { data: characterSheet } = useGetCharacterSheetQuery();

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
                    characterSheet?.saving_throws.map(({ name, modifier, proficient }) => {
                        return (
                            <SavingThrow name={name} statValue={modifier} proficient={proficient} />
                        );
                    })
                }
            </Box>
        </StyledPaper>
    );
}

interface SavingThrowProps {
    name: string;
    statValue: string | boolean;
    proficient: boolean;
}
export function SavingThrow({ name, statValue, proficient }: SavingThrowProps) {
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