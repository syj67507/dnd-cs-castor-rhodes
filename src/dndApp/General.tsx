import { Paper, Stack, TextField, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";
import useLocalStorage from "./useLocalStorage";
import { Charges } from "./Charges";

interface StatProps extends React.ComponentProps<typeof TextField> {
    value?: string | number;
    interactive?: boolean;
}
function StatField({ value, interactive, onChange }: StatProps) {
    return (
        <TextField
            fullWidth
            hiddenLabel
            disabled={!interactive}
            value={value}
            onChange={onChange}
            sx={{
                input: {
                    textAlign: "center",
                    bgcolor: "#FFF8F6" ,
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
            flex={1}
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
        <Stack flex={1}>
            <Typography textAlign="center">{`Hit Dice [d${character.classes.barbarian["hit-die"]} + ${character.abilities_bonuses[0].bonuses.con}]`}</Typography>  
            <Charges id="hitdice" total={5} />
        </Stack>
    );
}

function RageCharges() {
    return (
        <Stack flex={1}>
            <Typography textAlign="center">Rage</Typography>  
            <Charges id="rage" total={3} />
        </Stack>
    );
}

function DeathSaves() {
    return (
        <Stack flex={1}>
            <Typography textAlign="center">Death Saves</Typography>  
            <Charges id="deathsaves" total={6} />
        </Stack>
    );
}
interface GeneralProps {
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
}
export function General({
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
}: GeneralProps) {
    return (
        <Paper
            sx={{
                padding: 1,
                gridColumnStart: gridColumnStart,
                gridColumnEnd: gridColumnEnd,
                gridRowStart: gridRowStart,
                gridRowEnd: gridRowEnd,
                bgcolor: "#FFE8E1",
                overflow: "auto",
            }}
        >
            <Stack
                justifyContent="space-evenly"
                height="100%"
            >
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <ArmorClass />
                    <Initiative />
                    <Speed />
                    <Inspiration />
                    <ProficiencyBonus />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <TempHP />
                    <CurrentHP />
                    <MaxHP />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <HitDiceCharges />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <RageCharges />
                    <BardicInspiration />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <Gold />
                    <DeathSaves />
                </Stack>
            </Stack>
        </Paper>
    );
}