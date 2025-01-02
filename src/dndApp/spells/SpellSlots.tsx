import { Button, DialogActions, DialogContent, DialogTitle, Grid2 as Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Charges } from "../Charges";
import { StyledDialog } from "../StyledDialog";
import { StyledPaper } from "../StyledPaper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { saveSlots, setSlotInput, setSlotInputError, SpellSlotsInput } from "./spellsSlice";

interface SpellSlotCharges {
    /** The id to uniquely identify these set of slots / charges */
    id: string;
    /** Total number of slots available */
    total: number;
    /** The name of these charges that appears above */
    title: string;
}
function SpellSlotCharges({ title, id, total }: SpellSlotCharges) {
    return (
        <Stack height="100%">
            <Typography variant="body1" textAlign="center">
                {title}
            </Typography>
            <Charges id={id} total={total} />
        </Stack>
    );
}

interface SpellSlotTextFieldProps {
    level: keyof SpellSlotsInput
}
function SpellSlotTextField({ level }: SpellSlotTextFieldProps) {
    const originalValue = useAppSelector(state => state.spells.saved[level]);
    const value = useAppSelector(state => state.spells.input[level]);
    const dispatch = useAppDispatch();
    const [error, setError] = useState(" ");

    return (
        <TextField
            label="Number of spell slots"
            fullWidth
            margin="normal"
            value={value}
            error={error !== " "}
            helperText={error}
            slotProps={{
                htmlInput: {
                    inputMode: "numeric"
                }
            }}
            onBlur={(e) => {
                if (e.target.value.trim() === "") {
                    dispatch(setSlotInput({
                        level,
                        input: `${originalValue}`,
                    }))
                    setError(" ");
                }
            }}
            onChange={(e) => {
                // Check for error for the input
                const input = parseInt(e.target.value);
                                    
                const isInteger = Number.isInteger(input);
                const isInBounds = input < 5 && input > -1;

                if (!isInteger || !isInBounds) {
                    dispatch(setSlotInputError(true))
                    setError("You must input an integer between 1 and 4");
                } else {
                    dispatch(setSlotInputError(false))
                    setError(" ");
                }

                // Set the value anyways, purpose being that it doesn't feel restrictive to the user
                dispatch(setSlotInput({
                    level,
                    input: e.target.value
                }));
            }}
        />
    )

}

export function SpellSlots() {
    const [open, setOpen] = useState(false);
    const spellSlotInputs = useAppSelector(state => state.spells.input);
    const spellSlotsSaved = useAppSelector(state => state.spells.saved);
    const error = useAppSelector(state => state.spells.error);
    const dispatch = useAppDispatch();

    return (
        <>
            <StyledPaper>
                <Stack
                    direction="row-reverse"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton onClick={() => setOpen(true)}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Stack>
                <Grid
                    container
                    spacing={1}
                    sx={{
                        height: "100%",
                        justifyContent: "space-evenly",
                    }}
                >
                    {spellSlotsSaved.first > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="1st"
                            id="firstLevelSpellSlots"
                            total={spellSlotsSaved.first}
                        />
                    </Grid>}
                    {spellSlotsSaved.second > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="2nd"
                            id="secondLevelSpellSlots"
                            total={spellSlotsSaved.second}
                        />
                    </Grid>}
                    {spellSlotsSaved.third > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="3rd"
                            id="thirdLevelSpellSlots"
                            total={spellSlotsSaved.third}
                        />
                    </Grid>}
                    {spellSlotsSaved.fourth > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="4th"
                            id="fourthLevelSpellSlots"
                            total={spellSlotsSaved.fourth}
                        />
                    </Grid>}
                    {spellSlotsSaved.fifth > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="5th"
                            id="fifthLevelSpellSlots"
                            total={spellSlotsSaved.fifth}
                        />
                    </Grid>}
                    {spellSlotsSaved.sixth > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="6th"
                            id="sixthLevelSpellSlots"
                            total={spellSlotsSaved.sixth}
                        />
                    </Grid>}
                    {spellSlotsSaved.seventh > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="7th"
                            id="seventhLevelSpellSlots"
                            total={spellSlotsSaved.seventh}
                        />
                    </Grid>}
                    {spellSlotsSaved.eighth > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="8th"
                            id="eighthLevelSpellSlots"
                            total={spellSlotsSaved.eighth}
                        />
                    </Grid>}
                    {spellSlotsSaved.ninth > 0 && <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges
                            title="9th"
                            id="ninthLevelSpellSlots"
                            total={spellSlotsSaved.ninth}
                        />
                    </Grid>}
                </Grid>
            </StyledPaper>
            <StyledDialog open={open} onClose={() => {
                setOpen(false)
                dispatch(setSlotInput({
                    level: "first",
                    input: spellSlotsSaved.first.toString(),
                }));
                dispatch(setSlotInput({
                    level: "second",
                    input: spellSlotsSaved.second.toString(),
                }));
                dispatch(setSlotInput({
                    level: "third",
                    input: spellSlotsSaved.third.toString(),
                }));
                dispatch(setSlotInput({
                    level: "fourth",
                    input: spellSlotsSaved.fourth.toString(),
                }));
                dispatch(setSlotInput({
                    level: "fifth",
                    input: spellSlotsSaved.fifth.toString(),
                }));
                dispatch(setSlotInput({
                    level: "sixth",
                    input: spellSlotsSaved.sixth.toString(),
                }));
                dispatch(setSlotInput({
                    level: "seventh",
                    input: spellSlotsSaved.seventh.toString(),
                }));
                dispatch(setSlotInput({
                    level: "eighth",
                    input: spellSlotsSaved.eighth.toString(),
                }));
                dispatch(setSlotInput({
                    level: "ninth",
                    input: spellSlotsSaved.ninth.toString(),
                }));
            }}>
                <DialogTitle>Number of spell slots</DialogTitle>
                <DialogContent>
                    <SpellSlotTextField level="first" />
                    <SpellSlotTextField level="second" />
                    <SpellSlotTextField level="third" />
                    <SpellSlotTextField level="fourth" />
                    <SpellSlotTextField level="fifth" />
                    <SpellSlotTextField level="sixth" />
                    <SpellSlotTextField level="seventh" />
                    <SpellSlotTextField level="eighth" />
                    <SpellSlotTextField level="ninth" />
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={error}
                        onClick={() => {
                            dispatch(saveSlots({
                                first: parseInt(spellSlotInputs.first),
                                second: parseInt(spellSlotInputs.second),
                                third: parseInt(spellSlotInputs.third),
                                fourth: parseInt(spellSlotInputs.fourth),
                                fifth: parseInt(spellSlotInputs.fifth),
                                sixth: parseInt(spellSlotInputs.sixth),
                                seventh: parseInt(spellSlotInputs.seventh),
                                eighth: parseInt(spellSlotInputs.eighth),
                                ninth: parseInt(spellSlotInputs.ninth),
                            }));
                            setOpen(false);
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}