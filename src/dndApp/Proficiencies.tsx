import { Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

export function Proficiencies() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
                bgcolor: "#FFE8E1",
                padding: 1,
                gridColumnStart: "4",
                gridColumnEnd: "span 1",
                gridRowStart: "2",
                gridRowEnd: "span 3"
            }}>
            <Stack
                direction="column"
                alignItems="center"
                gap={1}
                height="100%"
                overflow="auto"
            >
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                    bgcolor="#FFF8F6"
                >
                    <Typography variant="body1" sx={{ textDecoration: "underline" }}>Weapon Proficiencies</Typography>
                    {character.proficiencies[0].weapon.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                    bgcolor="#FFF8F6"
                >
                    <Typography variant="body1" sx={{ textDecoration: "underline" }}>Armor Proficiencies</Typography>
                    {character.proficiencies[0].armor.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                    bgcolor="#FFF8F6"
                >
                    <Typography variant="body1" sx={{ textDecoration: "underline" }}>Language Proficiencies</Typography>
                    {character.proficiencies[0].language.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Stack
                    direction="column"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                    bgcolor="#FFF8F6"
                >
                    <Typography variant="body1" sx={{ textDecoration: "underline" }}>Feats and Traits</Typography>
                    <Typography variant="body1">Rage</Typography>
                    <Typography variant="body1">Danger Sense</Typography>
                    <Typography variant="body1">Extra Attack</Typography>
                    <Typography variant="body1">Fast Movement</Typography>
                    <Typography variant="body1">Great Weapon Master</Typography>
                    <Typography variant="body1">Reckless Attack</Typography>
                    <Typography variant="body1">Storm Aura: Sea</Typography>
                    <Typography variant="body1">Harpoon - https://the-griffons-saddlebag.tumblr.com/post/641935355983151104/%F0%9D%97%A1%F0%9D%97%B2%F0%9D%98%84-%F0%9D%97%B6%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%BA-steam-harpoon-weapon-spear-rare</Typography>
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
            </Stack>
        </Paper>
    );
}