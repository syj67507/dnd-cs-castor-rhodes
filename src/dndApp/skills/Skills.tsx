// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Stack, Typography } from "@mui/material";
import { StyledPaper } from "../StyledPaper";
import { useGetCharacterSheetQuery } from "../../characterSheet/characterSheetApiSlice";
import { Skill } from "./Skill";

export function Skills() {
    const { data: characterSheet } = useGetCharacterSheetQuery();

    return (
        <StyledPaper>
            <Stack spacing={1} alignItems="center">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Skills</Typography>
                {
                    characterSheet?.skills.map(({ name, value, proficient }) => {
                        return (
                            <Skill name={name} statValue={value} proficient={proficient} />
                        );
                    })
                }
            </Stack>
        </StyledPaper>
    );
}

