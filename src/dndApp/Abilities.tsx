import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { useGetAbilityScoreDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";

interface AbilityProps {
    name: string;
    modifier: string;
    score: string;
}

export function Ability({ name, modifier, score }: AbilityProps) {
    const [open, setOpen] = useState(false);
    const { data } = useGetAbilityScoreDescriptionQuery(name);

    return (
        <>
            <Stack
                onClick={() => setOpen(true)}
                bgcolor="#FFF8F6"
                borderRadius={1}
                border="1px solid rgba(0, 0, 0, 0.26)"
                sx={{
                    "&:hover": {
                        border: "1px solid black",
                    }
                }}
                flex={1}
                alignItems="center"
            >
                <Typography>{name}</Typography>
                <Typography variant="h5">{modifier}</Typography>
                <Typography>{score}</Typography>
            </Stack>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>{data?.full_name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{data?.desc.join("\n")}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

interface AbilitiesProps {
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
}

export function Abilities({
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
}: AbilitiesProps) {
    const abilityScores = characterSheet.ability_scores;

    return (
        <Paper
            sx={{
                bgcolor: "#FFE8E1",
                padding: 1,
                gridColumnStart: gridColumnStart,
                gridColumnEnd: gridColumnEnd,
                gridRowStart: gridRowStart,
                gridRowEnd: gridRowEnd,
            }}
        >
            <Grid2 container spacing={1}>
                {
                    abilityScores.map((abilityScore) => {
                        return (
                            <Grid2 size={{ xs: 4, sm: 2 }}>
                                <Ability 
                                    name={abilityScore.name}
                                    modifier={abilityScore.modifier}
                                    score={abilityScore.score}
                                />
                            </Grid2>
                        );
                    })
                }
                    
            </Grid2>
        </Paper>
    );
}