import { Button, DialogActions, DialogContent, DialogTitle, Grid2, Typography } from "@mui/material";
import { useGetAbilityScoreDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";
import { StyledDialog } from "./StyledDialog";
import { StyledDialogContentText } from "./StyledDialogContentText";
import { useGetCharacterSheetQuery } from "../characterSheet/characterSheetApiSlice";

interface AbilityProps {
    name: string;
    modifier: string;
    score: string;
}

export function Ability({ name, modifier, score }: AbilityProps) {
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
            <StyledDialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>{data?.full_name}</DialogTitle>
                <DialogContent>
                    <StyledDialogContentText text={data?.desc} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}


export function Abilities() {
    const { data: characterSheet } = useGetCharacterSheetQuery();

    return (
        <StyledPaper>
            <Grid2 container spacing={1}>
                {
                    characterSheet?.ability_scores.map((abilityScore) => {
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