import { DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { StyledDialog, StyledDialogProps } from "../StyledDialog";
import { RegisterOptions, useFormContext } from "react-hook-form";
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

const spellSlotValidationRules = {
    valueAsNumber: true,
    validate: (value: any) => {
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
            <DialogTitle>Number of Spell Slots</DialogTitle>
            <form onSubmit={handleSubmit((data) => {
                dispatch(saveSlots({
                    first: data.firstLevel,
                    second: data.secondLevel,
                    third: data.thirdLevel,
                    fourth: data.fourthLevel,
                    fifth: data.fifthLevel,
                    sixth: data.sixthLevel,
                    seventh: data.seventhLevel,
                    eighth: data.eighthLevel,
                    ninth: data.ninthLevel,
                }));
                onSave();
            })}>
                <DialogContent>
                    <TextField
                        label="1st Level"
                        fullWidth
                        error={!!formState.errors.firstLevel}
                        helperText={formState.errors.firstLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("firstLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="2nd Level"
                        fullWidth
                        error={!!formState.errors.secondLevel}
                        helperText={formState.errors.secondLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("secondLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="3rd Level"   
                        fullWidth
                        error={!!formState.errors.thirdLevel}
                        helperText={formState.errors.thirdLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("thirdLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="4th Level"
                        fullWidth
                        error={!!formState.errors.fourthLevel}
                        helperText={formState.errors.fourthLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("fourthLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="5th Level"
                        fullWidth
                        error={!!formState.errors.fifthLevel}
                        helperText={formState.errors.fifthLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("fifthLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="6th Level"
                        fullWidth
                        error={!!formState.errors.sixthLevel}
                        helperText={formState.errors.sixthLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("sixthLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="7th Level"
                        fullWidth
                        error={!!formState.errors.seventhLevel}
                        helperText={formState.errors.seventhLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("seventhLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="8th Level"
                        fullWidth
                        error={!!formState.errors.eighthLevel}
                        helperText={formState.errors.eighthLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("eighthLevel", spellSlotValidationRules)}
                    />
                    <TextField
                        label="9th Level"
                        fullWidth
                        error={!!formState.errors.ninthLevel}
                        helperText={formState.errors.ninthLevel?.message ?? " "}
                        autoComplete="off"
                        slotProps={{
                            htmlInput: {
                                inputMode: "numeric"
                            }
                        }}
                        onFocus={(e) => e.target.select()}
                        margin="normal"
                        {...register("ninthLevel", spellSlotValidationRules)}
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