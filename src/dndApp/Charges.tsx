// TODO refactor this file so that checkbox state is tied to its respective slice
// we want spellslot charge data to be in side of spell slots
import { Stack } from "@mui/material";
import { StyledStack } from "./StyledStack";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GeneralStateCharges, setCharges } from "./general/generalSlice";
import { StyledCheckbox } from "./StyledCheckbox";
import { useEffect } from "react";


interface ChargesProps {
    id: keyof GeneralStateCharges
    total: number,
}

/**
 * This component is an interactive input that uses checkboxes as a way to keep
 * track of the amount of charges that has been used for something like an ability
 * or spell.
 * 
 * Each checkbox is tracked using redux so that the state is kept during
 * different sessions or upon refreshing. 
 * 
 * total is needed to know how many charges to render
 * redux will not inherently have the correct number of charges, upon updating it should update with all charges,
 * true or false
 */
export function Charges({ id, total }: ChargesProps) {
    const checkedStates = useAppSelector(state => state.general.charges[id]);
    const dispatch = useAppDispatch();

    // This useEffect is used to make sure that redux is set with the correct number of charges based on the value of total
    // Only done on initial render
    useEffect(() => {
        if (checkedStates.length !== total) {
            const initial = Array.from({ length: total }).map(() => false);
            for (let i = 0; i < total; i++) {
                if (checkedStates[i]) {
                    initial[i] = checkedStates[i];
                }
            }
            dispatch(setCharges({
                id: id,
                value: initial
            }));
        }
    }, [])

    return (
        <StyledStack
            flex={1}
            padding={1}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                direction="row"
                overflow="auto"
                flexWrap="wrap"
                justifyContent="center"
            >
                {Array.from({length: total}, (_, i) => i).map((index) => {
                    return (
                        <StyledCheckbox
                            checked={checkedStates[index] ?? false}
                            onChange={(e) => {
                                const changed = [...checkedStates];
                                changed[index] = e.target.checked;
                                dispatch(setCharges({
                                    id: id,
                                    value: changed,
                                }))
                            }}
                        />
                    )
                })}
            </Stack>
        </StyledStack>
    )
}



