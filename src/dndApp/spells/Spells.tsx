import { Button, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { StyledPaper } from "../StyledPaper";
import { StyledStack } from "../StyledStack";
import { useState } from "react";
import { StyledDialog } from "../StyledDialog";
import { StyledDialogContentText } from "../StyledDialogContentText";
import { useGetCharacterSheetQuery } from "../../characterSheet/characterSheetApiSlice";
import { useParams } from "react-router";

interface SpellProps {
    name: string;
    cost: string;
    roll: string;
    damage: Array<{
        level: string;
        damage: string;
    }>;
    description: string[];
    castingTime: string;
    range: string;
    components: string;
    duration: string;
}

export function Spell({
    name,
    cost,
    roll,
    damage,
    description,
    castingTime,
    range,
    components,
    duration
}: SpellProps) {
    const [damageLevelIndex, setDamageLevelIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const rotateLevel = () => {
        if (damageLevelIndex === damage.length - 1) {
            setDamageLevelIndex(0);
        } else {
            setDamageLevelIndex(damageLevelIndex + 1);
        }
    }

    return (
        <>
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    cursor: description.length > 0 ? "pointer" : undefined,
                }}
            >
                <StyledStack
                    direction="row"
                    flex={2}
                    alignItems="center"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <Typography variant="body1">Lvl {damage[damageLevelIndex].level} / {name}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{cost}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{roll}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{damage[damageLevelIndex].damage}</Typography>
                </StyledStack>
            </Stack>
            {description.length > 0 && <StyledDialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <StyledDialogContentText text={[`Casting Time: ${castingTime}`]} />
                    <StyledDialogContentText text={[`Range: ${range}`]} />
                    <StyledDialogContentText text={[`Components: ${components}`]} />
                    <StyledDialogContentText text={[`Duration: ${duration}`, ""]} />
                    <StyledDialogContentText text={description}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </StyledDialog>}
        </>
    );
}

export function Spells() {
    const params = useParams()
    const { data: characterSheet } = useGetCharacterSheetQuery(params.id ?? "");

    return (
        <StyledPaper>
            <Stack spacing={1} alignItems="center" width="100%">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Spells</Typography>
                <Stack
                direction="column"
                width="100%"
                spacing={1}
                >
                    {characterSheet?.spells.map(spell => {
                        return (
                            <Spell
                                name={spell.name}
                                cost={spell.cost}
                                roll={spell.roll}
                                damage={spell.damage}
                                description={spell.description}
                                castingTime={spell.casting_time}
                                range={spell.range}
                                components={spell.components}
                                duration={spell.duration}
                            />
                        );
                    })}
                    
                </Stack>
            </Stack>
        </StyledPaper>
    );
}