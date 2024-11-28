import { Grid2 as Grid, OutlinedInput, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import characterSheet from "./character-sheet.json";
import useLocalStorage from "./useLocalStorage";
import { Charges } from "./Charges";

interface StatProps extends React.ComponentProps<typeof OutlinedInput> {
    value?: string | number;
    interactive?: boolean;
}
function StatField({ value, interactive, onChange }: StatProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <OutlinedInput
            fullWidth
            disabled={!interactive}
            value={value}
            onChange={onChange}
            sx={{
                height: "100%",
                bgcolor: "#FFF8F6",
                input: {
                    textAlign: "center",
                    fontSize: matches ? "2rem" : "1rem",
                },
            }}
        />
    );
}

function Gold() {
    const character = characterSheet.character[0];
    const [gold, setGold] = useLocalStorage("gold", character.treasure.gp);

    return (
        <Stack
            alignItems="center"
            height="100%"
            onContextMenu={(e) => {
                e.preventDefault()
                setGold(character.treasure.gp);
            }}
        >
            <Typography>Gold</Typography>
            <StatField
                value={gold}
                interactive
                onChange={(e) => {
                    setGold(e.target.value);
                }}
            />
        </Stack>
    );
}

function CurrentHP() {
    const character = characterSheet.character[0];
    const [currentHP, setCurrentHP] = useLocalStorage("currentHP", character.treasure.gp);

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Current HP</Typography>
            <StatField
                value={currentHP}
                interactive
                onChange={(e) => {
                    setCurrentHP(e.target.value);
                }}
            />
        </Stack>
    );
}

function TempHP() {
    const [tempHP, setTempHP] = useLocalStorage("tempHP", 0);

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Temp HP</Typography>
            <StatField
                value={tempHP}
                interactive
                onChange={(e) => {
                    setTempHP(e.target.value);
                }}
            />
        </Stack>
    );
}

function MaxHP() {
    const character = characterSheet.character[0];

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Max HP</Typography>
            <StatField value={character.hp[0].hp_max} />
        </Stack>
    );
}

function ProficiencyBonus() {
    const character = characterSheet.character[0];

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Prof Bonus</Typography>
            <StatField value={`+${character.proficiency_bonus}`} />
        </Stack>
    );
}

function BardicInspiration() {
    const [value, setValue] = useLocalStorage("bardicInspiration", 0);

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Bardic Inspiration</Typography>
            <StatField
                value={value}
                interactive
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </Stack>
    );
}

function ArmorClass() {
    const character = characterSheet.character[0];

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Armor Class</Typography>
            <StatField value={character.ac} />
        </Stack>
    );
}

function Initiative() {
    const character = characterSheet.character[0];

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Initiative</Typography>
            <StatField value={character.initiative_bonus} />
        </Stack>
    );
}

function Speed() {
    const character = characterSheet.character[0];

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Speed</Typography>
            <StatField value={character.characteristics[0].speed} />
        </Stack>
    );
}

function Inspiration() {
    const [value, setValue] = useLocalStorage("inspiration", 0);

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Inspiration</Typography>
            <StatField
                value={value}
                interactive
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </Stack>
    );
}

function HitDiceCharges() {
    const character = characterSheet.character[0];

    return (
        <Stack height="100%">
            <Typography textAlign="center">{`Hit Dice [d${character.classes.barbarian["hit-die"]} + ${character.abilities_bonuses[0].bonuses.con}]`}</Typography>  
            <Charges id="hitdice" total={5} />
        </Stack>
    );
}

function RageCharges() {
    return (
        <Stack height="100%">
            <Typography textAlign="center">Rage</Typography>  
            <Charges id="rage" total={3} />
        </Stack>
    );
}

function DeathSaves() {
    return (
        <Stack height="100%">
            <Typography textAlign="center">Death Saves</Typography>  
            <Charges id="deathsaves" total={3} />
        </Stack>
    );
}

function DeathFails() {
    return (
        <Stack height="100%">
            <Typography textAlign="center">Death Fails</Typography>  
            <Charges id="deathfails" total={3} />
        </Stack>
    );
}
export function General() {
    return (
        <Paper
            sx={{
                padding: 1,
                bgcolor: "#FFE8E1",
                overflow: "auto",
            }}
        >
            <Grid
                container
                spacing={1}
                sx={{
                    height: "100%"
                }}
            >
                <Grid size={{ xs: 6, md: 3}}>
                    <ArmorClass />
                </Grid>
                <Grid size={{ xs: 6, md: 3}}>
                    <Initiative />
                </Grid>
                <Grid size={{ xs: 6, md: 3}}>
                    <Speed />
                </Grid>
                <Grid size={{ xs: 6, md: 3}}>
                    <ProficiencyBonus />
                </Grid>
                <Grid size={{ xs: 4, md: 4}}>
                    <TempHP />
                </Grid>
                <Grid size={{ xs: 4, md: 4}}>
                    <CurrentHP />
                </Grid>
                <Grid size={{ xs: 4, md: 4}}>
                    <MaxHP />
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                    <HitDiceCharges />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <Gold />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <RageCharges />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <BardicInspiration />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <DeathSaves />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <Inspiration />
                </Grid>
                <Grid size={{ xs: 6, md: 4}}>
                    <DeathFails />
                </Grid>
            </Grid>
        </Paper>
    );
}