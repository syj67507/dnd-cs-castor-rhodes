import { Button, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { StyledPaper } from "../StyledPaper";
import { StyledStack } from "../StyledStack";
import { useState } from "react";
import { StyledDialog } from "../StyledDialog";
import { StyledDialogContentText } from "../StyledDialogContentText";
import character from "../formatted-sheet.json";

// const spells = [
//     { name: "Absorb Elements", description: ["The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."], },
//     { name: "Catapult", description: ["Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."], },
//     { name: "Cure Wounds", description: ["A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."], },
//     { name: "Detect Magic", description: ["For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."], },
//     { name: "Feather Fall", description: ["Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature."], },
//     { name: "Identify", description: ["You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."], },
//     { name: "Magic Missile", description: ["You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."], },
//     { name: "Thunderwave", description: ["A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."], },
// ];

interface SpellProps {
    name: string;
    cost: string;
    roll: string;
    damage: Array<{
        level: string;
        damage: string;
    }>;
    description: string[];
    castingTime: string;
    range: string;
    components: string;
    duration: string;
}

export function Spell({
    name,
    cost,
    roll,
    damage,
    description,
    castingTime,
    range,
    components,
    duration
}: SpellProps) {
    const [damageLevelIndex, setDamageLevelIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const rotateLevel = () => {
        if (damageLevelIndex === damage.length - 1) {
            setDamageLevelIndex(0);
        } else {
            setDamageLevelIndex(damageLevelIndex + 1);
        }
    }

    return (
        <>
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    cursor: description.length > 0 ? "pointer" : undefined,
                }}
            >
                <StyledStack
                    direction="row"
                    flex={2}
                    alignItems="center"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <Typography variant="body1">Lvl {damage[damageLevelIndex].level} / {name}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{cost}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{roll}</Typography>
                </StyledStack>
                <StyledStack
                    direction="row"
                    flex={1}
                    alignItems="center"
                    onClick={rotateLevel}
                >
                    <Typography variant="body1">{damage[damageLevelIndex].damage}</Typography>
                </StyledStack>
            </Stack>
            {description.length > 0 && <StyledDialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <StyledDialogContentText text={[`Casting Time: ${castingTime}`]} />
                    <StyledDialogContentText text={[`Range: ${range}`]} />
                    <StyledDialogContentText text={[`Components: ${components}`]} />
                    <StyledDialogContentText text={[`Duration: ${duration}`, ""]} />
                    <StyledDialogContentText text={description}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </StyledDialog>}
        </>
    );
}

export function Spells() {
    const spells = character.spells;
    return (
        <StyledPaper>
            <Stack spacing={1} alignItems="center" width="100%">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Spells</Typography>
                <Stack
                direction="column"
                width="100%"
                spacing={1}
                >
                    {spells.map(spell => {
                        return (
                            <Spell
                                name={spell.name}
                                cost={spell.cost}
                                roll={spell.roll}
                                damage={spell.damage}
                                description={spell.description}
                                castingTime={spell.casting_time}
                                range={spell.range}
                                components={spell.components}
                                duration={spell.duration}
                            />
                        );
                    })}
                    
                </Stack>
            </Stack>
        </StyledPaper>
    );
}