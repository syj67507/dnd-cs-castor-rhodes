import { Dialog, useTheme, DialogProps } from "@mui/material"

export interface StyledDialogProps extends DialogProps {}

export function StyledDialog({ open, onClose, children, ...rest }: StyledDialogProps) {
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