import { DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, DialogContentText } from "@mui/material";
import { StyledDialog, StyledDialogProps } from "../StyledDialog";
import { useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { SpellSlotsForm } from "./SpellSlots";
import { saveSlots } from "./spellsSlice";
import { useAppDispatch } from "../../app/hooks";

interface SpellSlotsEditDialogProps {
    /** Determines if this dialog is open or closed */
    open: boolean;
    /** Callback when closing this dialog */
    onClose: StyledDialogProps['onClose']
    /** Callback when clicking save, the submission handler for the form */
    onSave: Function
}

export function SpellSlotsEditDialog({ open, onClose, onSave }: SpellSlotsEditDialogProps) {
    const { register, handleSubmit, reset, formState } = useFormContext<SpellSlotsForm>();
    const dispatch = useAppDispatch();

    return (
        <StyledDialog open={open} onClose={(event, reason) => {
            reset();
            if (onClose) {
                onClose(event, reason);
            }
        }}>
            <DialogTitle>Shams TODO</DialogTitle>
            <form onSubmit={handleSubmit((data) => {
                dispatch(saveSlots({
                    first: data.firstLevel,
                    second: data.secondLevel,
                    third: 2,
                    fourth: 1,
                    fifth: 0,
                    sixth: 0,
                    seventh: 0,
                    eighth: 0,
                    ninth: 0,
                }));
                onSave();
            })}>
                <DialogContent>
                <TextField
                        fullWidth
                        error={!!formState.errors.firstLevel}
                        helperText={formState.errors.firstLevel?.message ?? " "}
                        autoComplete="off"
                        {...register("firstLevel", {
                            valueAsNumber: true,
                            validate: (value) => {
                                if (Number.isInteger(value)) {
                                    return true;
                                } else {
                                    return "You can only input numbers";
                                }
                            },
                            min: {
                                value: 0,
                                message: "You must have at least 1 spell slot"
                            },
                            max: {
                                value: 4,
                                message: "You can only have up to 4 spell slots"
                            },
                            required: {
                                value: true,
                                message: "Required. Use 0 to hide this level."
                            }
                        })}
                    />
                    <TextField
                        fullWidth
                        error={!!formState.errors.secondLevel}
                        helperText={formState.errors.secondLevel?.message ?? " "}
                        autoComplete="off"
                        {...register("secondLevel", {
                            valueAsNumber: true,
                            validate: (value) => {
                                if (Number.isInteger(value)) {
                                    return true;
                                } else {
                                    return "You can only input numbers";
                                }
                            },
                            min: {
                                value: 0,
                                message: "You must have at least 1 spell slot"
                            },
                            max: {
                                value: 4,
                                message: "You can only have up to 4 spell slots"
                            },
                            // pattern: {
                            //     value: /\d+/g,
                            //     message: "You can only input numbers"
                            // },
                            required: {
                                value: true,
                                message: "Required. Use 0 to hide this level."
                            }
                        })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={!formState.isValid}
                        type="submit"
                    >
                        Save
                    </Button>
                </DialogActions>
            </form>
        </StyledDialog>
    );
}