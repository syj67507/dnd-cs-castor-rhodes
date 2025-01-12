import type { SxProps} from "@mui/material";
import { Stack, Typography, useTheme } from "@mui/material";
import { StyledStack } from "./StyledStack";
import useLocalStorage from "./useLocalStorage";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";
import { useParams } from "react-router";

interface WeaponProps {
    id: string;
    name: string;
    atk: string;
    roll: string;
    modifier: string;
    damage_type: string;
}
export function Weapon({ id, name, atk, roll, modifier, damage_type }: WeaponProps) {
    const theme = useTheme();
    const [consumed, setConsumed] = useLocalStorage(id, false);
    
    // Visual changes, sx is being conditionally set so it can
    // fall back to original color
    const sx: SxProps = {
        cursor: "pointer",
    }
    if (consumed) {
        sx.bgcolor = theme.consumedWeapon;
    }

    return (
        <Stack direction="row" spacing={1} onClick={() => setConsumed(!consumed)}>
            <StyledStack
                direction="row"
                flex={2}
                sx={sx}
                alignItems="center"
            >
                <Typography variant="body1">{name}</Typography>
            </StyledStack>
            <StyledStack
                direction="row"
                flex={1}
                justifyContent="center"
                alignItems="center"
                sx={sx}
            >
                <Typography variant="body1">{atk}</Typography>
            </StyledStack>
            <StyledStack
                direction="row"
                flex={3}
                alignItems="center"
                sx={sx}
            >
                <Typography variant="body1">{roll}{modifier} {damage_type}</Typography>
            </StyledStack>
        </Stack>
    );
}


export function Weapons() {
    const params = useParams()
    const { data: characterSheet } = useGetCharacterSheetQuery(params.id ?? "");

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
                {characterSheet?.weapons.map(({ name, atk, roll, modifier, damage_type }, index) => {
                    return (
                        <Weapon
                            id={`${name}-${index}`}
                            name={name}
                            atk={atk}
                            roll={roll}
                            modifier={modifier}
                            damage_type={damage_type}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );

}
