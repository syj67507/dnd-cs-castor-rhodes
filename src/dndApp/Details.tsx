import { Stack, Typography } from "@mui/material";
import { Weapons } from "./Weapons";
import { ItemsAndEquipment } from "./ItemsAndEquipment";
import { FeatsAndTraits } from "./FeatsAndTraits";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";

export function Details() {
    const { data: characterSheet } = useGetCharacterSheetQuery();

    return (
        <StyledPaper>
            <Stack
                direction="column"
                alignItems="center"
                spacing={1}
                height="100%"
                justifyContent="flex-start"
                overflow="auto"
            >
                <Weapons />
                <FeatsAndTraits />
                <ItemsAndEquipment />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Weapon Proficiencies</Typography>
                <StyledStack
                    width="100%"
                >
                    {characterSheet?.weapon_proficiency.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Armor Proficiencies</Typography>
                <StyledStack
                    width="100%"
                >
                    {characterSheet?.armor_proficiency.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Language Proficiencies</Typography>
                <StyledStack
                    width="100%"
                >
                    {characterSheet?.language_proficiency.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
            </Stack>
        </StyledPaper>
    );
}