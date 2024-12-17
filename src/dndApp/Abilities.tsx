import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid2, Typography, useTheme } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { useGetAbilityScoreDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";
import { Skill } from "./Skills";

interface AbilityProps {
    name: string;
    modifier: string;
    score: string;
}

export function Ability({ name, modifier, score }: AbilityProps) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { data } = useGetAbilityScoreDescriptionQuery(name.toLowerCase());

    return (
        <>
            <StyledStack
                onClick={() => setOpen(true)}
                flex={1}
                alignItems="center"
            >
                <Typography>{name}</Typography>
                <Typography variant="h5">{modifier}</Typography>
                <Typography>{score}</Typography>
            </StyledStack>
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                sx={{
                    ".MuiDialog-paper": {
                        bgcolor: theme.unitBackground,
                        borderRadius: theme.borderRadius,
                    },
                    
                }}
            >
                <DialogTitle>{data?.full_name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>{data?.desc.join("\n")}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


export function Abilities() {
    const abilityScores = characterSheet.ability_scores;

    return (
        <StyledPaper>
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
        </StyledPaper>
    );
}