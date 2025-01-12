import { Grid2 as Grid, IconButton, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Charges } from "../Charges";
import { StyledPaper } from "../StyledPaper";
import { useAppSelector } from "../../app/hooks";
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
            {/* <Charges id={id} total={total} /> */}
        </Stack>
    );
}

export interface SpellSlotsForm {
    firstLevel: number;
    secondLevel: number;
    thirdLevel: number;
    fourthLevel: number;
    fifthLevel: number;
    sixthLevel: number;
    seventhLevel: number;
    eighthLevel: number;
    ninthLevel: number;
}

export function SpellSlots() {
    const [open, setOpen] = useState(false);
    const spellSlotsSaved = useAppSelector(state => state.spells.saved);

    const methods = useForm<SpellSlotsForm>({
        mode: "onChange",
        defaultValues: {
            firstLevel: spellSlotsSaved.first,
            secondLevel: spellSlotsSaved.second,
            thirdLevel: spellSlotsSaved.third,
            fourthLevel: spellSlotsSaved.fourth,
            fifthLevel: spellSlotsSaved.fifth,
            sixthLevel: spellSlotsSaved.sixth,
            seventhLevel: spellSlotsSaved.seventh,
            eighthLevel: spellSlotsSaved.eighth,
            ninthLevel: spellSlotsSaved.ninth,
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
            <FormProvider {...methods}>
                <SpellSlotsEditDialog open={open} onClose={() => setOpen(false)} onSave={() => setOpen(false)}/>
            </FormProvider>
        </>
    );
}