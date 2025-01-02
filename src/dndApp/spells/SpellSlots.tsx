import { Button, DialogActions, DialogContent, DialogTitle, Grid2 as Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Charges } from "../Charges";
import { StyledDialog } from "../StyledDialog";
import { StyledPaper } from "../StyledPaper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { saveSlots, setSlotInput, setSlotInputError, SpellSlotsInput } from "./spellsSlice";
import { SpellSlotsEditDialog } from "./SpellSlotsEditDialog";
import { FormProvider, useForm } from "react-hook-form";

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


export interface SpellSlotsForm {
    firstLevel: number;
    secondLevel: number;
}

export function SpellSlots() {
    const [open, setOpen] = useState(false);
    const spellSlotsSaved = useAppSelector(state => state.spells.saved);

    const methods = useForm<SpellSlotsForm>({
        mode: "onChange",
        defaultValues: {
            firstLevel: spellSlotsSaved.first,
            secondLevel: spellSlotsSaved.second,
        }
    });

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
                </Grid>
            </StyledPaper>
            <FormProvider {...methods}>
                <SpellSlotsEditDialog open={open} onClose={() => setOpen(false)} onSave={() => setOpen(false)}/>
            </FormProvider>
        </>
    );
}