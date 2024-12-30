import { Button, DialogActions, DialogContent, DialogTitle, Grid2 as Grid, Stack, TextField, Typography } from "@mui/material";
import { StyledPaper } from "./StyledPaper";
import useLocalStorage from "./useLocalStorage";
import { StyledDialog } from "./StyledDialog";
import { useState } from "react";
import { Charges } from "./Charges";

interface SpellSlotCharges {
    /** The id to uniquely identify these set of slots / charges */
    id: string;
    /** Total number of slots available */
    total: number;
    /** The name of these charges that appears above */
    title: string;
}
function SpellSlotCharges({ title, id, total }: SpellSlotCharges) {
    const [totalCharges, setTotalCharges] = useLocalStorage(`${id}TotalCharges`, total);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(totalCharges);
    const [error, setError] = useState("");

    return (
        <>
            <Stack
                height="100%"
            >
                <Typography
                    variant="body1"
                    textAlign="center"
                    onDoubleClick={() => {
                        setOpen(true);
                    }}
                >
                    {title}
                </Typography>
                <Charges id={id} total={totalCharges || 1} />
            </Stack>
            <StyledDialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Number of {title} level spell slots</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Number of spell slots"
                        fullWidth
                        margin="normal"
                        value={input}
                        error={error.length > 0}
                        helperText={error}
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onChange={(e) => {
                            // Check for error for the input
                            const value = parseInt(e.target.value);
                            
                            const isInteger = Number.isInteger(value);
                            const isInBounds = value < 5 && value > -1;

                            if (!isInteger || !isInBounds) {
                                setError("You must input an integer between 1 and 4");
                            } else {
                                setError("");
                            }

                            // Set the value anyways, purpose being that it doesn't feel restrictive to the user
                            setInput(e.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={error.length > 0}
                        onClick={() => {
                            setTotalCharges(input);
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

export function SpellSlots() {
    return (
        <StyledPaper>
            <Typography variant="body1" textAlign="center" sx={{ fontWeight: "bold" }}>Spell Slots</Typography>
            <Grid
                container
                spacing={1}
                sx={{
                    height: "100%",
                    justifyContent: "space-evenly",
                }}
            >
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="1st" id="firstLevelSpellSlots" total={4} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="2nd" id="secondLevelSpellSlots" total={4} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="3rd" id="thirdLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="4th" id="fourthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="5th" id="fifthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="6th" id="sixthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="7th" id="seventhLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="8th" id="eighthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 1 }}>
                    <SpellSlotCharges title="9th" id="ninthLevelSpellSlots" total={3} />
                </Grid>
            </Grid>
        </StyledPaper>
    );
}