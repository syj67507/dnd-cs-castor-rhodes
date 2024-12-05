import { Paper, Stack, Typography } from "@mui/material";
import { Notes } from "./Notes";
import { Weapons } from "./Weapons";
import characterSheet from "./character-sheet.json";

export function Details() {
    const character = characterSheet.character[0];

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
                    <Typography variant="body1">Rage</Typography>
                    <Typography variant="body1">Danger Sense</Typography>
                    <Typography variant="body1">Extra Attack</Typography>
                    <Typography variant="body1">Fast Movement</Typography>
                    <Typography variant="body1">Great Weapon Master</Typography>
                    <Typography variant="body1">Reckless Attack</Typography>
                    <Typography variant="body1">Storm Aura: Sea</Typography>
                    <Typography variant="body1">Clothes, traveler’s</Typography>
                    <Typography variant="body1">Explorer's Pack</Typography>
                    <Typography variant="body1">Fishing tackle</Typography>
                    <Typography variant="body1">Pouch</Typography>
                    <Typography variant="body1">Greater Healing Potion</Typography>
                    <Typography variant="body1">Soulgaze Monacle</Typography>
                    <Typography variant="body1">Bottle of Boundless Coffee</Typography>
                    <Typography variant="body1">Heward's Spice Pouch</Typography>
                    <Typography variant="body1">Pole of Angling</Typography>
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
                    {character.proficiencies[0].weapon.split(";").map((prof) => {
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
                    {character.proficiencies[0].armor.split(";").map((prof) => {
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
                    {character.proficiencies[0].language.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
            </Stack>
        </Paper>
    );
}