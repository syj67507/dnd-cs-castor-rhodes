import { Stack, Checkbox } from "@mui/material";
import useLocalStorage from "./useLocalStorage";

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
        />
    );
}

interface ChargesProps {
    id: string;
    total: number;
}

export function Charges({ id, total }: ChargesProps) {

    return (
        <Stack
            flex={1}
            direction="row"
            border="1px solid rgba(0, 0, 0, 0.26)"
            borderRadius={1}
            padding={1}
            justifyContent="center"
            alignItems="center"
            sx={{
                "&:hover": {
                    border: "1px solid black"
                },
                bgcolor: "#FFF8F6",
            }}
        >
            <Stack direction="row" overflow="auto">
                {Array.from({length: total}, (_, i) => i + 1).map((index) => {
                    return (
                        <CheckboxLocalStorage id={`${id}-${index}`} />
                    )
                })}
            </Stack>
        </Stack>
    )
}



