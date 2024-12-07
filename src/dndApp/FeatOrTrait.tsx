import { Typography, Dialog, DialogTitle, DialogContent, DialogContentText, Stack, DialogActions, Button } from "@mui/material";
import { useState } from "react";

interface FeatOrTraitProps {
    name: string;
    description?: string[];
}
export function FeatOrTrait({ name, description }: FeatOrTraitProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Typography variant="body1" onClick={() => setOpen(true)}>{name}</Typography>
            {description && description.length > 0 && <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Stack spacing={1}>
                        {description.map(d => {
                            return <Typography variant="body1">{d}</Typography>
                        })}
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>}
        </>
    );
}