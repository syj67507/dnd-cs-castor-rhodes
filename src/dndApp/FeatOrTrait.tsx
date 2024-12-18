import { Typography, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { StyledDialog } from "./StyledDialog";
import { StyledDialogContentText } from "./StyledDialogContentText";

interface FeatOrTraitProps {
    name: string;
    description?: string[];
}
export function FeatOrTrait({ name, description }: FeatOrTraitProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Typography variant="body1" onClick={() => setOpen(true)}>{name}</Typography>
            {description && description.length > 0 && (
                <StyledDialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>{name}</DialogTitle>
                    <DialogContent>
                        <StyledDialogContentText text={description}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </StyledDialog>
            )}
        </>
    );
}