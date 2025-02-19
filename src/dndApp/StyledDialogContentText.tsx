import { DialogContentText, DialogContentTextProps, Stack, Typography, useTheme } from "@mui/material";


interface StyledDialogContentTextProps extends DialogContentTextProps {
    /** The text to display, where each element of the array is going to appear on a new line**/
    text?: string[]
}

/**
 * A styled wrapper around the DialogContentText component in the mui library
 * The idea with this component is that it will automatically style the components that are
 * inside and add spacing breaks for each set of strings passed in
 */
export function StyledDialogContentText({ text }: StyledDialogContentTextProps) {
    const theme = useTheme();
    return (
        <Stack spacing={1}>
            {text && text.map((t, index) => {
                return (
                    <DialogContentText
                        key={index}
                        sx={{
                            color: theme.dialogContentTextTypography,
                        }}
                    >
                        {t}
                    </DialogContentText>
                );     
            })}
        </Stack>
    )
}