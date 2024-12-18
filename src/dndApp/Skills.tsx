// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography, useTheme } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { useGetSkillsDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";
import { StyledStack } from "./StyledStack";
import { StyledPaper } from "./StyledPaper";
import { StyledDialog } from "./StyledDialog";

export function Skills() {
    const skills = characterSheet.skills;

    return (
        <StyledPaper>
            <Stack spacing={1} alignItems="center">
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Skills</Typography>
                {
                    skills.map(({ name, value }) => {
                        return (
                            <Skill name={name} statValue={value} />
                        );
                    })
                }
            </Stack>
        </StyledPaper>
    );
}

interface SkillProps {
    name: string;
    statValue: string | boolean;
}
export function Skill({ name, statValue }: SkillProps) {
    const [open, setOpen] = useState(false);
    const { data } = useGetSkillsDescriptionQuery(name);
    const skillName = `${name.slice(0,1).toUpperCase()}${name.slice(1)}`.replace(/-/g, " ")
    const theme = useTheme();

    return (
        <>
            <StyledStack
                direction="row"
                width="100%"
                justifyContent="space-between"
                onClick={() => setOpen(true)}
            >
                <Typography variant="body1">
                    {skillName}
                </Typography>
                <Typography variant="body1">
                    {statValue}
                </Typography>
            </StyledStack>
            <StyledDialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>{skillName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography sx={{
                            color: theme.dialogContentTextTypography,
                        }}>
                            {data?.desc}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </StyledDialog>
        </>
    );

}