import { Typography, DialogTitle, DialogContent, DialogActions, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { StyledDialog } from "./StyledDialog";
import { StyledDialogContentText } from "./StyledDialogContentText";

interface ThingWithDescriptionProps {
    name: string;
    description: string[];
}

/**
 * A component that is just a regular Typography component but paired with a Dialog component.
 * The dialog component is only available if the description is defined.
 */
export function ThingWithDescription({ name, description }: ThingWithDescriptionProps) {
    const [open, setOpen] = useState(false)
    const theme = useTheme()

    return (
        <>
            <Typography
                variant="body1"
                onClick={() => setOpen(true)}
                sx={{
                    cursor: description.length > 0 ? "pointer" : undefined,
                    "&:hover": {
                        color: description.length > 0 ? theme.thingWithDescriptionHover : undefined,
                    }
                }}
            >
                {name}
            </Typography>
            {description.length > 0 && (
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