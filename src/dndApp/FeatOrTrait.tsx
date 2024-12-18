import { Typography, DialogTitle, DialogContent, DialogContentText, Stack, DialogActions, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { StyledDialog } from "./StyledDialog";

interface FeatOrTraitProps {
    name: string;
    description?: string[];
}
export function FeatOrTrait({ name, description }: FeatOrTraitProps) {
    const [open, setOpen] = useState(false)
    const theme = useTheme();

    return (
        <>
            <Typography variant="body1" onClick={() => setOpen(true)}>{name}</Typography>
            {description && description.length > 0 && (
                <StyledDialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Stack spacing={1}>
                                {description.map(d => {
                                    return (
                                        <Typography sx={{
                                            color: theme.dialogContentTextTypography,
                                        }}>
                                            {d}
                                        </Typography>
                                    );     
                                })}
                            </Stack>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </StyledDialog>
            )}
        </>
    );
}