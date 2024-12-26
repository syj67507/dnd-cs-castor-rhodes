import { Stack, Checkbox, useTheme } from "@mui/material";
import useLocalStorage from "./useLocalStorage";
import { StyledStack } from "./StyledStack";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface CheckboxLocalStorageProps {
    id: string;
}
function CheckboxLocalStorage({ id }: CheckboxLocalStorageProps) {
    const theme = useTheme();
    const [value, setValue] = useLocalStorage(id, false);

    return (
        <Checkbox
            checked={value}
            onChange={(e) => {
                console.log(e.target.checked);
                setValue(e.target.checked);
            }}
            sx={{
                "&.Mui-checked": {
                    color: theme.checkboxColor,
                },
                '& .MuiSvgIcon-root': {
                    fontSize: 28
                }
            }}
            icon={theme.checkboxShape === "square" ? undefined : <RadioButtonUncheckedIcon />}
            checkedIcon={theme.checkboxShape === "square" ? undefined : <CheckCircleIcon />}
        />
    );
}

interface ChargesProps {
    id: string;
    total: number;
}

/**
 * This component is an interactive input that uses checkboxes as a way to keep
 * track of the amount of charges that has been used for something like an ability
 * or spell.
 * 
 * Each checkbox is tracked using local storage so that the state is kept during
 * different sessions or upon refreshing. 
 */
export function Charges({ id, total }: ChargesProps) {
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
                {Array.from({length: total}, (_, i) => i + 1).map((index) => {
                    return (
                        <CheckboxLocalStorage id={`${id}-${index}`} />
                    )
                })}
            </Stack>
        </StyledStack>
    )
}



