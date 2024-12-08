import { Stack, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { StyledStack } from "./StyledStack";

export function Weapons() {
    const { weapons } = characterSheet;

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
                {weapons.map(({ name, atk, roll, modifier, damage_type }) => {
                    return (
                        <Stack direction="row" spacing={1}>
                            <StyledStack
                                direction="row"
                                flex={2}
                                alignItems="center"
                            >
                                <Typography variant="body1">{name}</Typography>
                            </StyledStack>
                            <StyledStack
                                direction="row"
                                flex={1}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Typography variant="body1">{atk}</Typography>
                            </StyledStack>
                            <StyledStack
                                direction="row"
                                flex={3}
                                alignItems="center"
                            >
                                <Typography variant="body1">{roll}{modifier} {damage_type}</Typography>
                            </StyledStack>
                        </Stack>
                    );
                })}
                <StyledStack>
                    <Typography variant="body1">Harpoon</Typography>
                </StyledStack>
            </Stack>
        </Stack>
    );

}
