import { Grid2 as Grid, OutlinedInput, Stack, Typography, useTheme } from "@mui/material";
import { Charges } from "../Charges";
import { StyledPaper } from "../StyledPaper";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setBardicInspiration, setCurrentHP, setGold, setInspiration, setTempHP } from "./generalSlice";
import { useGetCharacterSheetQuery } from "../../characterSheet/characterSheetApiSlice";
import { useParams } from "react-router";

interface StatProps extends React.ComponentProps<typeof OutlinedInput> {
    value?: string | number;
    interactive?: boolean;
}
function StatField({ value, interactive, onChange }: StatProps) {
    const theme = useTheme();

    return (
        <OutlinedInput
            fullWidth
            disabled={!interactive}
            value={value}
            onChange={onChange}
            sx={{
                height: "100%",
                bgcolor: theme.unitBackground,
                borderRadius: theme.borderRadius, // need this to match the border radius of the input element
                input: {
                    textAlign: "center",
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: theme.border,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: theme.borderHover,
                },
                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    border: theme.border,
                },
                '&.Mui-disabled .MuiInputBase-input': {
                    WebkitTextFillColor: theme.disabledInputColor,
                }
            }}
        />
    );
}

function Gold() {
    const gold = useAppSelector(state => state.general.gold);
    const dispatch = useAppDispatch();

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Gold</Typography>
            <StatField
                value={gold}
                interactive
                onChange={(e) => {
                    dispatch(setGold(e.target.value));
                }}
            />
        </Stack>
    );
}

function CurrentHP() {
    const currentHP = useAppSelector(state => state.general.currentHP);
    const dispatch = useAppDispatch();

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
                    dispatch(setCurrentHP(e.target.value));
                }}
            />
        </Stack>
    );
}

function TempHP() {
    const tempHP = useAppSelector(state => state.general.tempHP);
    const dispatch = useAppDispatch();

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
                    dispatch(setTempHP(e.target.value));
                }}
            />
        </Stack>
    );
}

function MaxHP() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Max HP</Typography>
            <StatField value={character?.hp.max} />
        </Stack>
    );
}

function ProficiencyBonus() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");


    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Prof Bonus</Typography>
            <StatField value={`+${character?.proficiency_bonus}`} />
        </Stack>
    );
}

function BardicInspiration() {
    const bardicInspiration = useAppSelector(state => state.general.bardicInspiration);
    const dispatch = useAppDispatch();


    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Bardic Inspiration</Typography>
            <StatField
                value={bardicInspiration}
                interactive
                onChange={(e) => {
                    dispatch(setBardicInspiration(e.target.value));
                }}
            />
        </Stack>
    );
}

function ArmorClass() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Armor Class</Typography>
            <StatField value={character?.armor_class} />
        </Stack>
    );
}

function Initiative() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Initiative</Typography>
            <StatField value={character?.initiative} />
        </Stack>
    );
}

function Speed() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Speed</Typography>
            <StatField value={character?.speed} />
        </Stack>
    );
}

function Inspiration() {
    const inspiration = useAppSelector(state => state.general.inspiration);
    const dispatch = useAppDispatch();

    return (
        <Stack
            alignItems="center"
            height="100%"
        >
            <Typography>Inspiration</Typography>
            <StatField
                value={inspiration}
                interactive
                onChange={(e) => {
                    dispatch(setInspiration(e.target.value));
                }}
            />
        </Stack>
    );
}

function HitDiceCharges() {
    const params = useParams()
    const { data: character } = useGetCharacterSheetQuery(params.id ?? "");
    
    return (
        <Stack height="100%">
            {/* <Typography textAlign="center">{`Hit Dice [d${character.classes.barbarian["hit-die"]} + ${character.abilities_bonuses[0].bonuses.con}]`}</Typography>   */}
            <Typography textAlign="center">Hit Dice</Typography>  
            <Charges id="hitdice" total={5} /> 
            {/* hard coding for now since i don't feel like do it now */}
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
            <Charges id="deathSaves" total={3} />
        </Stack>
    );
}

function DeathFails() {
    return (
        <Stack height="100%">
            <Typography textAlign="center">Death Fails</Typography>  
            <Charges id="deathFails" total={3} />
        </Stack>
    );
}

export function General() {
    return (
        <StyledPaper>
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
        </StyledPaper>
    );
}