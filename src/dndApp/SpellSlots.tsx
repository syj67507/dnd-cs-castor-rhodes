import { Button, DialogActions, DialogContent, DialogTitle, Grid2 as Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { StyledPaper } from "./StyledPaper";
import useLocalStorage from "./useLocalStorage";
import EditIcon from '@mui/icons-material/Edit';
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
    return (
        <Stack
            height="100%"
        >
            <Typography
                variant="body1"
                textAlign="center"
            >
                {title}
            </Typography>
            <Charges id={id} total={total} />
        </Stack>
    );
}

export function SpellSlots() {
    const [spellSlotCharges, setSpellSlotCharges] = useLocalStorage("spellSlotCharges", [2, 1, 1, 1, 1, 1, 1, 1, 1]);

    const [firstLevelInput, setFirstLevelInput] = useState(spellSlotCharges[0]);
    const [secondLevelInput, setSecondLevelInput] = useState(spellSlotCharges[1]);
    const [thirdLevelInput, setThirdLevelInput] = useState(spellSlotCharges[1]);
    const [fourthLevelInput, setFourthLevelInput] = useState(spellSlotCharges[1]);
    const [fifthLevelInput, setFifthLevelInput] = useState(spellSlotCharges[1]);
    const [sixthLevelInput, setSixthLevelInput] = useState(spellSlotCharges[1]);
    const [seventhLevelInput, setSeventhLevelInput] = useState(spellSlotCharges[1]);
    const [eigthLevelInput, setEigthLevelInput] = useState(spellSlotCharges[1]);
    const [ninthLevelInput, setNinthLevelInput] = useState(spellSlotCharges[1]);


    const [open, setOpen] = useState(false);
    const [error, setError] = useState("___");

    const onSpellSlotNumberValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<any>) => {
        // Check for error for the input
        const value = parseInt(e.target.value);
                            
        const isInteger = Number.isInteger(value);
        const isInBounds = value < 5 && value > -1;

        if (!isInteger || !isInBounds) {
            setError("You must input an integer between 1 and 4");
        } else {
            setError(" ");
        }

        // Set the value anyways, purpose being that it doesn't feel restrictive to the user
        setter(e.target.value);
    }

    return (
        <>
            <StyledPaper>
                <Stack
                    direction="row-reverse"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton onClick={() => setOpen(true)}>
                        <EditIcon />
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
                    {<Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="1st" id="firstLevelSpellSlots" total={spellSlotCharges[0]} />
                    </Grid>}
                    {<Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="2nd" id="secondLevelSpellSlots" total={spellSlotCharges[1]} />
                    </Grid>}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="3rd" id="thirdLevelSpellSlots" total={spellSlotCharges[2]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="4th" id="fourthLevelSpellSlots" total={spellSlotCharges[3]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="5th" id="fifthLevelSpellSlots" total={spellSlotCharges[4]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="6th" id="sixthLevelSpellSlots" total={spellSlotCharges[5]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="7th" id="seventhLevelSpellSlots" total={spellSlotCharges[6]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="8th" id="eighthLevelSpellSlots" total={spellSlotCharges[7]} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SpellSlotCharges title="9th" id="ninthLevelSpellSlots" total={spellSlotCharges[8]} />
                    </Grid>
                </Grid>
            </StyledPaper>
            <StyledDialog open={open} onClose={() => {
                setFirstLevelInput(spellSlotCharges[0]);
                setSecondLevelInput(spellSlotCharges[1]);
                setThirdLevelInput(spellSlotCharges[1]);
                setFourthLevelInput(spellSlotCharges[1]);
                setFifthLevelInput(spellSlotCharges[1]);
                setSixthLevelInput(spellSlotCharges[1]);
                setSeventhLevelInput(spellSlotCharges[1]);
                setEigthLevelInput(spellSlotCharges[1]);
                setNinthLevelInput(spellSlotCharges[1]);
                setOpen(false)
            }}>
                <DialogTitle>Number of spell slots</DialogTitle>
                <DialogContent>
                    {
                        [
                            {
                                value: firstLevelInput,
                                setter: setFirstLevelInput,
                            },
                            {
                                value: secondLevelInput,
                                setter: setSecondLevelInput,
                            },
                            {
                                value: thirdLevelInput,
                                setter: setThirdLevelInput,
                            },
                            {
                                value: fourthLevelInput,
                                setter: setFourthLevelInput,
                            },
                            {
                                value: fifthLevelInput,
                                setter: setFifthLevelInput,
                            },
                            {
                                value: sixthLevelInput,
                                setter: setSixthLevelInput,
                            },
                            {
                                value: seventhLevelInput,
                                setter: setSeventhLevelInput,
                            },
                            {
                                value: eigthLevelInput,
                                setter: setEigthLevelInput,
                            },
                            {
                                value: ninthLevelInput,
                                setter: setNinthLevelInput,
                            },
                        ].map(state => {
                            return (
                                <TextField
                                    label="Number of spell slots"
                                    fullWidth
                                    margin="normal"
                                    value={state.value}
                                    error={error !== " "}
                                    helperText={error}
                                    slotProps={{
                                        htmlInput: {
                                            inputMode: "numeric"
                                        }
                                    }}
                                    onChange={(e) => {
                                        onSpellSlotNumberValueChange(e, state.setter);
                                    }}
                                />
                            )
                        })
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={error !== " "}
                        onClick={() => {
                            setSpellSlotCharges([
                                firstLevelInput,
                                secondLevelInput,
                                thirdLevelInput,
                                fourthLevelInput,
                                fifthLevelInput,
                                sixthLevelInput,
                                seventhLevelInput,
                                eigthLevelInput,
                                ninthLevelInput,
                            ]);
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