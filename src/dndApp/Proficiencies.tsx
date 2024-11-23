import { Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

export function Proficiencies() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
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
            >
                <Stack
                    direction="column"
                    border="1px solid black"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                >
                    <Typography variant="h6">Weapon Proficiencies</Typography>
                    {character.proficiencies[0].weapon.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Stack
                    direction="column"
                    border="1px solid black"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                >
                    <Typography variant="h6">Armor Proficiencies</Typography>
                    {character.proficiencies[0].armor.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                <Stack
                    direction="column"
                    border="1px solid black"
                    borderRadius={1}
                    padding={1}
                    width="100%"
                    flex={1}
                >
                    <Typography variant="h6">Language Proficiencies</Typography>
                    {character.proficiencies[0].language.split(";").map((prof) => {
                        return (
                            <Typography variant="body1">{prof}</Typography>
                        );
                    })}
                </Stack>
                {/* {character.proficiencies[0].tool && (
                    <Stack direction="column" border="1px solid black" borderRadius={1} padding={1}>
                        <Typography variant="h6">Tool Proficiencies</Typography>
                        {character.proficiencies[0].tool.split(";").map((prof) => {
                            return (
                                <Typography variant="body1">{prof}</Typography>
                            );
                        })}
                    </Stack>
                )} */}
            </Stack>
        </Paper>
    );
}