import { DialogContentText, DialogContentTextProps, Stack, Typography, useTheme } from "@mui/material";


interface StyledDialogContentTextProps extends DialogContentTextProps {
    /** The text to display, where each element of the array is going to appear on a new line**/
    text?: string[]
}

/**
 * A styled wrapper around the DialogContentText component in the mui library
 * The idea with this component is that it will automatically style the components that are
 * inside and use a Typography component automatically without having to define it directly
 */
export function StyledDialogContentText({ text }: StyledDialogContentTextProps) {
    const theme = useTheme();
    return (
        <DialogContentText>
            {text && <Stack spacing={1}>
                {text.map(t => {
                    return (
                        <Typography sx={{
                            color: theme.dialogContentTextTypography,
                        }}>
                            {t}
                        </Typography>
                    );     
                })}
            </Stack>}
        </DialogContentText>
    )
}