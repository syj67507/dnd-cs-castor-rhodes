import { Button, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { FeatOrTrait } from "./FeatOrTrait";
import characterSheet from "./formatted-sheet.json";
import { StyledStack } from "./StyledStack";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import { StyledDialog } from "./StyledDialog";
import { useState } from "react";
import { StyledDialogContentText } from "./StyledDialogContentText";

export function ItemsAndEquipment() {
    const { items_and_equipment } = characterSheet;
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    return (
        <>
            <Stack
                direction="row"
                // bgcolor="black"
                width="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    width="100%"
                >
                    <Stack flex={1} bgcolor="red" />
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>Items & Equipment</Typography>
                    <Stack
                        direction="row"
                        flex={1}
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                    {loading && (
                        <Tooltip
                            title="Your changes are being saved..."
                            placement="top"
                        >
                            <HourglassFullIcon fontSize="small" sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                        </Tooltip>
                    )}
                    {!error && !loading && (
                        <Tooltip
                            title="Your changes have been saved."
                            placement="top"
                        >
                            <CheckIcon fontSize="small" sx={{ color: "green" }} />
                        </Tooltip>
                    )}
                    {error && !loading && (
                        <Tooltip
                            title="There was an error saving your changes. They may be lost upon refreshing."
                            placement="top"
                        >
                            <ErrorOutlineIcon fontSize="small" sx={{ color: "red" }} />
                        </Tooltip>
                    )}
                    <IconButton size="small" onClick={() => setOpen(true)}><AddIcon /></IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <StyledStack
                width="100%"
            >
                {items_and_equipment.map((itemOrEquipment) => {
                    return <FeatOrTrait name={itemOrEquipment.name} description={itemOrEquipment.description} />
                })}
            </StyledStack>
            <StyledDialog
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <DialogTitle>Creating new item or equipment</DialogTitle>
                <DialogContent>
                    <StyledDialogContentText text={[
                        "Enter the name of the item or equipment below and click save.",
                        "",
                        "You can optionally add a description and will appear when you tap or click on the item.",
                    ]} />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description (optional)"
                        fullWidth
                        multiline
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setLoading(true);
                            setOpen(false)
                            setTimeout(() => {
                                setLoading(false);
                                setError(false);
                            }, 2000);
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}