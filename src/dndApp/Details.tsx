import { Paper, Stack, Typography } from "@mui/material";
import { Notes } from "./Notes";
import { Weapons } from "./Weapons";
import characterSheet from "./formatted-sheet.json";

export function Details() {
    const featsAndTraits = characterSheet.feats_and_traits;
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
                <Notes />
                <Weapons />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Feats & Traits</Typography>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    bgcolor="#FFF8F6"
                >
                    {featsAndTraits.map((featOrTrait) => {
                        return (
                            <Typography variant="body1">{featOrTrait.name}</Typography>
                        )
                    })}
                </Stack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Weapon Proficiencies</Typography>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    bgcolor="#FFF8F6"
                >
                    {weaponProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Armor Proficiencies</Typography>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    bgcolor="#FFF8F6"
                >
                    {armorProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Language Proficiencies</Typography>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    bgcolor="#FFF8F6"
                >
                    {languageProficiencies.map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
            </Stack>
        </Paper>
    );
}