import { Stack, Checkbox } from "@mui/material";
import useLocalStorage from "./useLocalStorage";
import { StyledStack } from "./StyledStack";

interface CheckboxLocalStorageProps {
    id: string;
}
function CheckboxLocalStorage({ id }: CheckboxLocalStorageProps) {
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
                    color: "red",
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



