import { Typography, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { useGetSkillsDescriptionQuery } from "../dndApiSlice";
import { StyledDialog } from "../StyledDialog";
import { StyledDialogContentText } from "../StyledDialogContentText";
import { StyledStack } from "../StyledStack";

interface SkillProps {
    name: string;
    statValue: string;
    proficient: boolean;
}
export function Skill({ name, statValue, proficient }: SkillProps) {
    const [open, setOpen] = useState(false);
    const { data } = useGetSkillsDescriptionQuery(name);
    const skillName = `${name.slice(0,1).toUpperCase()}${name.slice(1)}`.replace(/-/g, " ")
    console.log("SHAMS", data);
    return (
        <>
            <StyledStack
                data-testid="skill"
                direction="row"
                width="100%"
                justifyContent="space-between"
                onClick={() => setOpen(true)}
            >
                <Typography variant="body1"
                    data-testid="skill-name"
                    sx={{
                        fontWeight: proficient ? "bold" : "normal",
                    }}
                >
                    {skillName}
                </Typography>
                <Typography variant="body1"
                    data-testid="skill-stat-value"
                    sx={{
                        fontWeight: proficient ? "bold" : "normal",
                    }}
                >
                    {statValue}
                </Typography>
            </StyledStack>

            {/* Only render the dialog if data was loaded successfully */}
            {data && <StyledDialog
                data-testid="skill-dialog"
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>{skillName}{proficient ? ": Proficient" : ""}</DialogTitle>
                <DialogContent>
                    <StyledDialogContentText text={data?.desc} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </StyledDialog>}
        </>
    );

}