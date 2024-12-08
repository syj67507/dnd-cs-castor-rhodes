// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Typography } from "@mui/material";
import characterSheet from "./formatted-sheet.json";
import { useGetSkillsDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";
import { StyledStack } from "./StyledStack";

export function Skills() {
    const skills = characterSheet.skills;

    return (
        <Paper
            sx={{
                padding: 1,
                overflow: "auto",
                bgcolor: "#FFE8E1",
            }}
        >
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
        </Paper>
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
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <DialogTitle>{skillName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{data?.desc}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );

}