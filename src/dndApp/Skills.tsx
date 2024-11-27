// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from "@mui/material";
import characterSheet from "./character-sheet.json";
import { useGetSkillsDescriptionQuery } from "./dndApiSlice";
import { useState } from "react";

export function Skills() {
    const character = characterSheet.character[0];

    return (
        <Paper
            sx={{
                padding: 1,
                overflow: "auto",
                bgcolor: "#FFE8E1",
                height: "100%",
            }}
        > 
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>Feats and Traits</Typography>
                {Object.entries(character.skills)
                    .filter(([skillName]) => !skillName.includes("check"))
                    .sort((a, b) => {
                        if (a < b) {
                            return -1;
                        }
                        if (a > b) {
                            return 1;
                        }
                        return 0;
                    })
                    .map(([skillName, statValue]) => {
                        return (
                            <>
                                <Skill name={skillName} statValue={statValue} />
                            </>
                        );
                    })
                }
            </Box>
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
            <Box
                sx={{
                    id: skillName,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    borderRadius: 1,
                    padding: 1,
                    bgcolor: "#FFF8F6",
                    border: "1px solid rgba(0, 0, 0, 0.26)",
                    "&:hover": {
                        border: "1px solid black",
                    }
                }}
                onClick={() => setOpen(true)}
            >
                <Typography variant="body1">
                    {skillName}
                </Typography>
                <Typography variant="body1">
                    {statValue}
                </Typography>
            </Box>
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