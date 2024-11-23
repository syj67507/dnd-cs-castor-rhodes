import { Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";
import useLocalStorage from "./useLocalStorage";

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
                },
            }}
        />
    );
}

interface ChargesProps {
    name: string;
    total: number;
    amountUsed?: number;
}
function Charges({ name, total, amountUsed = 0 }: ChargesProps) {
    return (
        <Stack flex={1}>
            <Typography textAlign="center">{name}</Typography>
            <Stack
                direction="row"
                border="1px solid rgba(0, 0, 0, 0.26)"
                borderRadius={1}
                padding={1}
                justifyContent="center"
                height="56px"
                sx={{
                    "&:hover": {
                        border: "1px solid black"
                    },
                }}
            >
                {Array.from({length: total}, (_, i) => i + 1).map((index) => {
                    const used = index <= amountUsed;
                    return (
                        <Checkbox defaultChecked={used} sx={{ padding: 1}} />
                    )
                })}
            </Stack>
        </Stack>
    )
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
            <Typography>Proficiency Bonus</Typography>
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

export function General() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
                padding: 1,
                gridColumnStart: "2",
                gridColumnEnd: "span 2",
                gridRowStart: "2",
                gridRowEnd: "span 3"
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
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <ProficiencyBonus />
                    <TempHP />
                    <Charges name={`Hit Dice [d${character.classes.barbarian["hit-die"]} + ${character.abilities_bonuses[0].bonuses.con}]`} total={5} />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <Charges name="Rage" total={3} amountUsed={0} />
                    <MaxHP />
                    <BardicInspiration />
                </Stack>
                <Stack
                    flexDirection="row"
                    gap={1}
                >
                    <Gold />
                    <CurrentHP />
                    <Charges name="Death Saves" total={3} />
                </Stack>
            </Stack>
        </Paper>
    );
}