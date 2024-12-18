import { Dialog, useTheme, DialogProps } from "@mui/material"

interface SimpleDialogProps extends DialogProps {}

export function StyledDialog({ open, onClose, children, ...rest }: SimpleDialogProps) {
    const theme = useTheme();

    return (
        <Dialog
                open={open}
                onClose={onClose}
                sx={{
                    ".MuiDialog-paper": {
                        bgcolor: theme.unitBackground,
                        borderRadius: theme.borderRadius,
                    },
                }}
                {...rest}
            >
            {children}
        </Dialog>
    )
}