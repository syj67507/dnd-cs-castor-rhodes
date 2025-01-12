import { CheckCircle as CheckCircleIcon, RadioButtonUnchecked as RadioButtonUncheckedIcon } from "@mui/icons-material";
import { Checkbox, CheckboxProps, useTheme } from "@mui/material"

export interface StyledCheckboxProps extends CheckboxProps {}

export function StyledCheckbox(props: StyledCheckboxProps) {
    const theme = useTheme();

    return (
        <Checkbox
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
            {...props}
        />
    )
}
