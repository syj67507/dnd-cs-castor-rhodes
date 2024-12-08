import { Paper, Stack, Typography } from "@mui/material";
import { Weapons } from "./Weapons";
import characterSheet from "./formatted-sheet.json";
import { ItemsAndEquipment } from "./ItemsAndEquipment";
import { FeatsAndTraits } from "./FeatsAndTraits";
import { StyledStack } from "./StyledStack";

export function Details() {
    const weaponProficiencies = characterSheet.weapon_proficiency;
    const armorProficiencies = characterSheet.armor_proficiency;
    const languageProficiencies = characterSheet.language_proficiency;

    return (
        <Paper
            sx={{
                bgcolor: "#FFE8E1",
                padding: 1,
                overflow: "auto",
            }}>
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
                    {weaponProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Armor Proficiencies</Typography>
                <StyledStack
                    width="100%"
                >
                    {armorProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Language Proficiencies</Typography>
                <StyledStack
                    width="100%"
                >
                    {languageProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </StyledStack>
            </Stack>
        </Paper>
    );
}