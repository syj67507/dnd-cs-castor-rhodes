import { Box, Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

interface AbilityProps {
    name: string;
    modifier: number;
    value: number;
}

export function Ability({ name, modifier, value }: AbilityProps) {
    return (
        <Box sx={{
            display: "flex",
            flex: 1, 
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 1,
            border: "1px solid black",
            bgcolor: "white",
        }}>
            <Typography variant="h6" textAlign="center">{name}</Typography>
            <Typography variant="h4" textAlign="center">{modifier}</Typography>
            <Typography variant="h6" textAlign="center">{value}</Typography>
        </Box>
    );
}

export function Abilities() {
    const character = characterSheet.character[0];
    const statNames = ["cha","con","dex","int","str","wis"] as const;

    return (
        <Paper
            sx={{
                padding: 2,
                gridColumnStart: "2",
                gridColumnEnd: "span 3",
                gridRowStart: "1",
                gridRowEnd: "span 1",
            }}
        >
            <Stack
                direction="row"
                gap={2}
                alignItems="center"
                height="100%"
            >
                {statNames.map(stat => {
                    return (
                        <Ability
                            name={stat.toUpperCase()}
                            value={character.abilities_bonuses[0].abilities[stat]}
                            modifier={character.abilities_bonuses[0].bonuses[stat]}
                        />
                    );
                })}
            </Stack>
        </Paper>
    );
}