import { Box, Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

interface AbilityProps {
    name: string;
    modifier: string;
    value: number;
}

export function Ability({ name, modifier, value }: AbilityProps) {
    return (
        <Box sx={{
            display: "flex",
            flex: 1, 
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#FFF8F6",
            borderRadius: 1,
            border: "1px solid rgba(0, 0, 0, 0.26)",
            "&:hover": {
                border: "1px solid black",
            }
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
                bgcolor: "#FFE8E1",
            }}
        >
            <Stack
                direction="row"
                gap={2}
                alignItems="center"
                height="100%"
            >
                {statNames.map(stat => {
                    let sign = "";
                    if (character.abilities_bonuses[0].bonuses[stat] > 0) {
                        sign = "+"
                    }
                    return (
                        <Ability
                            name={stat.toUpperCase()}
                            modifier={`${sign}${character.abilities_bonuses[0].bonuses[stat]}`}
                            value={character.abilities_bonuses[0].abilities[stat]}
                        />
                    );
                })}
            </Stack>
        </Paper>
    );
}