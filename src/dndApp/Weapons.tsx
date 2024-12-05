import { Stack, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";

export function Weapons() {
    const character = characterSheet.character[0];
    const attacks = character.attacks as any;
    const weaponKeys = Object.keys(attacks).filter(key =>
        key.startsWith("weapon-name")
    );
    
    // Extract indices from the weapon-name keys
    const indices = weaponKeys.map(key => key.match(/(\d+)$/)[0]);
    
    // Build the resulting array
    const result = indices.map(index => ({
        name: attacks[`weapon-name-${index}`],
        "attack-bonus": attacks[`weapon-attack-bonus-${index}`],
        damage: attacks[`weapon-damage-${index}`],
    }));

    return (
        <Stack
            spacing={1}
            width="100%"
            alignItems="center"
        >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Weapons</Typography>
            <Stack
                direction="column"
                width="100%"
                spacing={1}
            >
                {result.map(r => {
                    return (
                        <Stack direction="row" spacing={1}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                border="1px solid rgba(0, 0, 0, 0.26)"
                                borderRadius={1}
                                bgcolor="#FFF8F6"
                                padding={1}
                                flex={1}
                                alignItems="center"
                            >
                                <Typography variant="body1">{r.name}</Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                border="1px solid rgba(0, 0, 0, 0.26)"
                                borderRadius={1}
                                bgcolor="#FFF8F6"
                                padding={1}
                                flex={1}
                                alignItems="center"
                            >
                                <Typography variant="body1">{r["attack-bonus"]}</Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                border="1px solid rgba(0, 0, 0, 0.26)"
                                borderRadius={1}
                                bgcolor="#FFF8F6"
                                padding={1}
                                flex={2}
                                alignItems="center"
                            >
                                <Typography variant="body1">{r.damage}</Typography>
                            </Stack>
                        </Stack>
                    );
                })}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    border="1px solid rgba(0, 0, 0, 0.26)"
                    borderRadius={1}
                    bgcolor="#FFF8F6"
                    padding={1}
                >
                    <Typography variant="body1">Harpoon</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
    
}
