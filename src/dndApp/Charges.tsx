import { Stack, Checkbox, useTheme } from "@mui/material";
import useLocalStorage from "./useLocalStorage";
import { StyledStack } from "./StyledStack";

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
                    color: theme.background,
                }
            }}
        />
    );
}

interface ChargesProps {
    id: string;
    total: number;
}

export function Charges({ id, total }: ChargesProps) {

    return (
        <StyledStack
            flex={1}
            padding={1}
            justifyContent="center"
            alignItems="center"
        >
            <Stack direction="row" overflow="auto">
                {Array.from({length: total}, (_, i) => i + 1).map((index) => {
                    return (
                        <CheckboxLocalStorage id={`${id}-${index}`} />
                    )
                })}
            </Stack>
        </StyledStack>
    )
}



