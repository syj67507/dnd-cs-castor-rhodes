import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { StyledPaper } from "./StyledPaper";
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
            <Typography variant="body1" textAlign="center">{title}</Typography>
            <Charges id={id} total={total} />
        </Stack>
    );
}

export function SpellSlots() {
    return (
        <StyledPaper>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Spell Slots</Typography>
            <Grid
                container
                spacing={1}
                sx={{
                    height: "100%",
                    justifyContent: "center",
                }}
            >
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="1st" id="firstLevelSpellSlots" total={4} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="2nd" id="secondLevelSpellSlots" total={4} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="3rd" id="thirdLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="4th" id="fourthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="5th" id="fifthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="6th" id="sixthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="7th" id="seventhLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="8th" id="eighthLevelSpellSlots" total={3} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <SpellSlotCharges title="9th" id="ninthLevelSpellSlots" total={3} />
                </Grid>
            </Grid>
        </StyledPaper>
    );
}